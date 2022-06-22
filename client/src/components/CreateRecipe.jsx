import React, {useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux';
import { postRecipe, getDiets} from '../actions';
import './CreateRecipe.css'



export default function CreateRecipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipeDiets = useSelector(state => state.recipeDiets )
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

  useEffect(async ()  => {
   await dispatch(getDiets()) ;
  }, [dispatch]);


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
    if (!post.healthyness || post.healthyness > 100 || post.healthyness < 0) {
      errors.healthyness = "Health score is required.";
    }
    if (!post.image) {
      errors.image = "A image is required.";
    }
    if (!post.diets) {
      errors.diets = "At least 1 diet is required";
    }
    if (!post.steps.length) {
      errors.steps = "At least 1 step is required.";
    }
    return errors;
  }

  function handleDiets(e){
    if(!post.diets.includes(e.target.value)){
      setPost({
        ...post,
        diets:[...post.diets, e.target.value]
        
      })
    };
    setErrors(
      validate({
        ...post,
        diets:[...post.diets, e.target.value]
      })
    );
  }

  function handleDeleteDiet(d){
    setPost({
      ...post,
      diets: post.diets.filter((e)=> e !== d)
      
    });
    setErrors(
      validate({
        ...post,
        diets: [...post.diets]
      })
    );

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

  function handleSubmit(e) {
    e.preventDefault();

    if (
      Object.values(post.title).length === 0 ||
      Object.values(post.score).length === 0 ||
      Object.values(post.image).length === 0 ||
      Object.values(post.diets).length === 0 ||
      Object.values(post.summary).length === 0 ||
      Object.values(post.steps).length === 0
    ) {
      alert("Porfavor completa todos los campos");
    } else {
      dispatch(postRecipe(post));
      alert("Receta creada con exito");
      navigate("/Home");
      console.log(post)
    }
  }

  return (
    <div className="gral">
    <form onSubmit={(e) => handleSubmit(e)} class="formulario">
      <div class="modalHeader">
        <Link to="/Home" class="X">
          <p >X</p>
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
            defaultValue={post.healthyness}
            onChange={handlechange}
            max="100"
            min="0"
          />
          <p class="denger">{errors.healthyness}</p>
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
          <div>
          <label htmlFor="title">Diets</label>
          <select onChange={(e)=> handleDiets(e)}
          defaultValue="default"
          >
            {recipeDiets.map((d) => {
              return (
                <option value={d.name} key={d.id}>
                  {d.name}
                </option>
              );
            })}

          </select>
          {errors.diets && <p class="denger">{errors.diets}</p>}
          {post.diets.map((d)=>{
            return(
              <div key={d.id}>
              <p>{d}</p>
              <button onClick={()=> handleDeleteDiet(d)}>X</button>
            </div>
            )

          })}
          </div>
          

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
    </div>
  );
}




