import React,{Component} from "react";
import { getRecipesByTitle,getRecipes,getRecipesByid,getDiets,filterRecipesCreated } from '../actions';
import { Link } from "react-router-dom";
import './Home.css'


class Home extends Component{
    render(){
        return(
            <div>
                <nav class="navbar">

                    <Link to='/' class="buttonHome">
                        <label class="logo">Recipes.PI</label>
                    </Link>
                    
                    <ul class='menu_items'>
                        <li class="active">
                            <Link to="/createRecipe">
                            <a>Create Recipe</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="createRecipe">
                            <a>Favorite</a>
                            </Link>
                        </li>
                    </ul>


                </nav>


            </div>



        )
    }
}


export default Home
