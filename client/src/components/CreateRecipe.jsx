import React,{Component} from "react";
import { Link } from "react-router-dom";
import './createRecipe.css'



class CreateRecipe extends Component{
    render(){
        return(
            // <div class="conteiner">
            //     <ul>
            //         <li><input type="text" placeholder="title"/></li>
            //         <li><input type="text" placeholder="summary"/></li>
            //         <li><input type="text" placeholder="score"/></li>
            //         <li><input type="image"placeholder="image" /></li>
            //         <li><input type="text" placeholder="healthyness"/></li>
            //         <li><input type="text" placeholder="steps"/></li>
            //     </ul>
            // </div>

            <div class="conteiner">
                <ul>
                    <li><input type="text" placeholder="title"name="" id="" /></li>
                    <li><input type="text" placeholder="summary"name="" id="" /></li>
                    <li><input type="text" placeholder="score"name="" id="" /></li>
                    <li><input type="text" placeholder="image"name="" id="" /></li>
                    <li><input type="text" placeholder="healthyness"name="" id="" /></li>
                    <li><input type="text" placeholder="steps"name="" id="" /></li>
                </ul>

                <input type="submit" value="Agregar" />

            </div>
        )
    
    }
}



export default CreateRecipe