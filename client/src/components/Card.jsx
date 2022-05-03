import React from 'react';
import './Card.css'



export default function Card(props){
    return(
        <div class="conteiner">
            <div class="card">
                
            <h1>{props.title}</h1>
            <img src={props.image}/>
            <div class="diets">
                <h1>Diets</h1>
                <p>{props.diets}</p>
            </div>
            <div class="score">
                <h1>Score</h1>
                <p>{props.score}</p>
            </div>

            </div>
       
        </div>
    )
}