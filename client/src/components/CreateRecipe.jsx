import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { addDietForm, postRecipe, removeDietForm, setRecipeForm } from '../actions';
import './createRecipe.css'



export default function CreateRecipe() {
  const dispatch = useDispatch();
  const recipeForm = useSelector((state) => state.recipeForm);


  function handleRecipeChange(e) {
    dispatch(setRecipeForm({ ...recipeForm, [e.target.name]: e.target.value }));
  }

  function onChangeAddDiet(diet) {
    dispatch(addDietForm(diet));
  }
  function onClickRemoveDiet(diet) {
    dispatch(removeDietForm(diet));
  }



  return (
    <div class="conteiner">
    <form 
    onSubmit={(e) => {
      e.preventDefault();
      dispatch(postRecipe(recipeForm));
      console.log(recipeForm)
    }}
  >
    <div class="divflex" >
   
        <Link to="/Home" class="buttonX">
          <button class="close">X</button>
        </Link>
        <h1>Create you Recipe</h1>
        <ul>
          <li>
          <span>Title</span>
            <input
              onChange={handleRecipeChange}
              value={recipeForm.title}
              id="title"
              type="text"
              placeholder="ej:Papas Fritas"
              name="title"
            />
          </li>
          <li>
            <span class="span">Summary</span>
            <textarea
              rows="3"
              cols="120"
              onChange={handleRecipeChange}
              value={recipeForm.summary}
              id="summary"
              type="textarea"
              placeholder=""
              name="summary"
            ></textarea>
            <p></p>
          </li>
          <li>
            <span class="span">Score</span>
            <input
              onChange={handleRecipeChange}
              value={recipeForm.score}
              id="score"
              type="number"
              min="0"
              max="100"
              placeholder=""
              name="score"
            />
            <p></p>
          </li>
          <li>
            <span class="span">Image</span>
            <input
              onChange={handleRecipeChange}
              value={recipeForm.image}
              id="image"
              type="url"
              min="0"
              max="100"
              placeholder=""
              name="image"
            />
            <p></p>
          </li>
          <li>
            <span class="span">Healthyness</span>
            <input onChange={handleRecipeChange} value={recipeForm.healthyness} id='healthyness' type = 'number' min="0" max="100" placeholder = '' name='healthyness'/>
          </li>
          <li>
            <span class="span">Steps</span>
            <textarea
              rows="6"
              cols="120"
              onChange={handleRecipeChange}
              value={recipeForm.steps}
              id="steps"
              type="textarea"
              placeholder=""
              name="steps"
            ></textarea>
            <p></p>
          </li>
        </ul>

        <input type="submit" value="Add recipe" class="Addbutton" />
     
        </div>
    </form>
    </div>
  );
}




