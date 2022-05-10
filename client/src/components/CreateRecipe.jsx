import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { addDietForm, postRecipe, removeDietForm} from '../actions';
import './CreateRecipe.css'



export default function CreateRecipe() {
  const dispatch = useDispatch();
  const formulario = document.getElementById("formulario")
  const [loaded, setLoaded] = useState(false);
  const [post, setPost] = useState({
    title:'',
    summary:'',
    score:0,
    healthyness:0,
    steps:'',
    image:'',
    diets:[]
  });

  function handlechange(e){
    setPost({
      ...post,
      [e.target.name]:e.target.value
    })
    console.log(post)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(postRecipe(post));
    formulario.reset();
    alert("Receta creada con exito")
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} id="formulario">
      <div class="modalHeader">
        <Link to="/Home">
        <span class="X">X</span>
        </Link>
        
      </div>

      <div>
        <div class="form-group">
          <h1>Create you Recipe</h1>
          <label htmlFor="title">title</label>
          <input class="form-control" type="text" name="title" id="title" onChange={handlechange}/>
          <br />
          <label htmlFor="score">Score</label>
          <input class="form-control" type="number" name="score" id="score" onChange={handlechange} max="100" min="0"/>
          <br />
          <label htmlFor="health">Healthyness</label>
          <input class="form-control" type="number" name="healthyness" id="healthyness" onChange={handlechange} max="100" min="0"/>
          <br />
          <label htmlFor="image">Image</label>
          <input class="form-control" type="url" name="image" id="image" onChange={handlechange}/>
          <br />
          <label htmlFor="summary">Summary</label>
          <textarea name="summary" id="summary" cols="240" rows="10" placeholder="your summary" onChange={handlechange}></textarea>
          <br />
          <label htmlFor="steps">Steps</label>
          <textarea name="steps" id="steps" cols="240" rows="10" onChange={handlechange}></textarea>
        </div>
      </div>

      <div>
        <button class="">Add Button</button>
      </div>
    </form>

  )
}




