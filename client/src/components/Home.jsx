import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipesByTitle,
  getRecipes,
  getRecipesByid,
  getDiets,
  filterRecipesCreated,
} from "../actions";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./Card";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const currentPage = useSelector((state) => state.currentPage);
  const [loaded, setLoaded] = useState(false);


  async function getData() {
    await dispatch(getRecipes());
    setLoaded(true);
  }

  useEffect(() => {
    getData();
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes.slice(indexOfFirstitem, indexOfLastItem);

  console.log(currentItems)
    return (
        <div>
        <nav class="navbar">
          <Link to="/" class="buttonHome">
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
                <SearchBar></SearchBar>
            </div>
        </nav>
        {loaded ? (
            <div class="subconteiner" >
                   <div class="content">
                   {currentItems.map((r, id) => (
                     <Link key={id} to={`/recipe/${r.id}`} class='recipeID'>
                       <Card
                         key={id}
                         title={r.title}
                         image={r.image}
                         diets={r.diets}
                         score={r.score}
                       />
                     </Link>
                   ))}
                 </div>
                 <div className="footer">
                   <Pagination recipes={recipes} />
                 </div>
            </div>
        ) : (
          <div class="load">
              <p class="loading">Loading...</p>
          </div>
            
          )}
 
      </div>
    );

}
