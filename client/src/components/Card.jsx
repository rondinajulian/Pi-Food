import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'



export default function Card(props){
    return (
      <Link key={props.id} to={`/recipe/${props.id}`} class="recipeID">
        <div className="conteiner">
          <div className="card">
            <h1>{props.title}</h1>
            <img src={props.image} />
            <div class="diets">
              <h3>Diets</h3>
              <p>{props.diets}</p>
            </div>
          </div>
        </div>
      </Link>
    );
}