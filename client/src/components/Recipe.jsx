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
                   <div class="detail">
                   <h2>{detail.title.length? detail.title:"No title"}</h2>
                   <img src={detail.image.length? detail.image:"No image"}/>
                   <p id="1">{detail.score}</p>
                   <p class="health">{detail.healthyness}</p>
                   <p class="diets">{detail.diets.length? detail.diets:"No diets"}</p>
                   <br />
                   <p>{detail.summary.length? detail.summary:"No summary"}</p>
                   <br />
                   <p>{detail.steps.length? detail.steps:"No steps"}</p>
                   </div>
        ):(
            <b class="loading">Loading...</b>
        )}
 
    
        </div>
    
    )
} 