import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar(getData){
    return(
        <div>
              <nav class="navbar">
          <Link to="/Home" class="buttonHome" >
            <label class="logo">Recipes.PI</label>
          </Link>

          <ul class="menu_items">
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
            <div class="searchBar">
                <SearchBar/>
            </div>
        </nav>
        </div>
    )

}