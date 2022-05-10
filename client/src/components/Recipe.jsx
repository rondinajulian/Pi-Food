import React,{useEffect, useState}from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getRecipesByid } from "../actions/index";
import Navbar from "./Navbar";
import './Recipe.css'


export default function Recipe(){
    const detail = useSelector(state=>state.recipeDetail)
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    let {id} = useParams();
    

    useEffect(() => {
        dispatch(getRecipesByid(id))
        setTimeout(() => {
            setLoaded(true)
        }, 1000);
      }, [dispatch,id]);
    


    return( 
        <div>
        <Navbar></Navbar>
        <br />

        {loaded?(
                   <div>
                   <h2>{detail.title}</h2>
                   <img src={detail.image}/>
                   <p>{detail.score}</p>
                   <p>{detail.healthyness}</p>
                   <p>{detail.diets}</p>
                   <p>{detail.summary}</p>
                   <p>{detail.steps}</p>
                   </div>
        ):(
            <b class="loading">Loading...</b>
        )}
 
    
        </div>
    
    )
} 