import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { addDietForm, postRecipe, removeDietForm} from '../actions';
import './CreateRecipe.css'



export default function CreateRecipe() {
  const dispatch = useDispatch();
  // const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({
    title:'',
    summary:'',
    score:0,
    healthyness:0,
    steps:'',
    image:'',
    diets:[]
  });

  function validate(post) {
    let errors = {};

    if (!post.title) {
      errors.title = "Title is required.";
    }
    if (!/^[A-Z]{5,}$/.test(post.title.toUpperCase())) {
      errors.title = "Title needs 5 characters or more.";
    }
    if (!post.summary) {
      errors.summary = "Description is required.";
    }
    if (!/^[A-Z]{4,}$/.test(post.title.toUpperCase())) {
      errors.title = "Title needs 4 characters or more.";
    }
    if (!post.score || post.score > 100 || post.score < 0) {
      errors.score = "A correct score is required 0 - 100.";
    }
    if (!post.health ) {
      errors.health = "Health score is required.";
    }
    if (!post.image) {
      errors.image = "A image is required.";
    }
    // if (input.diets.length === 0) {
    //   errors.diets = "At least 1 diet is required";
    // }
    if (!post.steps.length) {
      errors.steps = "At least 1 step is required.";
    }
    return errors;
  }


  function handlechange(e){
    setPost({
      ...post,
      [e.target.name]:e.target.value,
      
    })
   setErrors(
        validate({
          ...post,
          [e.target.name]: e.target.value,
        })
      );
   
  }

  function handleSubmit(e){
    e.preventDefault();

      console.log(Object.values(errors).length > 0)
      
    if (Object.values(errors).length > 0 ){
      alert("aaaa")

    }
    else{
      dispatch(postRecipe(post));
      alert("Receta creada con exito")

    }
    
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} class="formulario">
      <div class="modalHeader">
        <Link to="/Home">
          <p class="X">X</p>
        </Link>
      </div>

      <div>
        <div class="form-group">
          <h1>Create you Recipe</h1>
          <label htmlFor="title">Title</label>
          <input
            class="form-control"
            type="text"
            name="title"
            id="title"
            defaultValue={post.title}
            onChange={handlechange}
          />
          <p class="denger">{errors.title}</p>
          <br />
          <label htmlFor="score">Score</label>
          <input
            class="form-control"
            type="number"
            name="score"
            id="score"
            defaultValue={post.score}
            onChange={handlechange}
            max="100"
            min="0"
          />
          <p class="denger">{errors.score}</p>
          <br />
          <label htmlFor="health">Healthyness</label>
          <input
            class="form-control"
            type="number"
            name="healthyness"
            id="healthyness"
            defaultValue={post.health}
            onChange={handlechange}
            max="100"
            min="0"
          />
          <p class="denger">{errors.health}</p>
          <br />
          <label htmlFor="image">Image</label>
          <input
            class="form-control"
            type="url"
            name="image"
            id="image"
            defaultValue={post.image}
            onChange={handlechange}
          />
          <p class="denger">{errors.image}</p>
          <br />
          <label htmlFor="summary">Summary</label>
          <textarea
            name="summary"
            id="summary"
            cols="240"
            rows="10"
            defaultValue={post.summary}
            onChange={handlechange}
          ></textarea>
          <p class="denger">{errors.summary}</p>
          <br />
          <label htmlFor="steps">Steps</label>
          <textarea
            name="steps"
            id="steps"
            cols="240"
            rows="10"
            defaultValue={post.steps}
            onChange={handlechange}
          ></textarea>
           <p class="denger">{errors.steps}</p>
        </div>
      </div>

      <div>
        <button class="Addbutton" type="submit">Add Button</button>
      </div>
    </form>
  );
}




