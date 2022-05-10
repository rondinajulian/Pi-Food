import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import {
  orderByName,
  orderByPoints,
  getRecipes,
  filterRecipesCreated,
} from "../actions";
import Pagination from "./Pagination";
import Card from "./Card";
import Navbar from "./Navbar";




export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  // const currentPage = useSelector((state) => state.currentPage);
  const recipeOrder = useSelector(state => state.recipeOrder)
  const [/* order */, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  // const [recipeOrigin, setRecipeOrigin] = useState("all");



  async function getData() {
    await dispatch(getRecipes());
    if(recipes==="No se encontraron recetas") return setLoaded(false);
    else setLoaded(true);
  }

  useEffect(() => {
    getData();
  }, []);


 function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1)
    setOrder(`${e.target.value} order`);
  }

  function handleSortPoints(e) {
    e.preventDefault();
    dispatch(orderByPoints(e.target.value));
    setCurrentPage(1)
    setOrder(`${e.target.value} order`);
  }

  // function handleFilterType(e) {
  //   e.preventDefault();
  //   dispatch(filterRecipesByType(e.target.value, recipeOrigin));
  //   setCurrentPage(1);
  // }
 




  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes.slice(indexOfFirstitem, indexOfLastItem);

    return (
      <div>
        <Navbar></Navbar>

        <div class="">
          <select
            name="orderAlphabetic"
            onChange={(e) => handleSortName(e)}
            class=""
          >
            <option>Order by name</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
          </select>
          <select
            name="orderPoints"
            onChange={(e) => handleSortPoints(e)}
            class=""
          >
            <option>Order by points</option>
            <option value="asc">Max-Min</option>
            <option value="des">Min-Max</option>
          </select>
          {/* <select
            onChange={(e) => handleFilterType(e)}
            className={styles.selectDiets}
          >
            <option value="all">All</option>
            {allDiets.map((type) => {
              return (
                <option value={type.name} key={type.id}>
                  {type.name}
                </option>
              );
            })}
          </select> */}
        </div>

        {loaded ? (
          <div class="subconteiner">
            <div class="content">
              {currentItems.map((r, id) => (
                <Card
                  id={r.id}
                  key={id}
                  title={r.title}
                  image={r.image}
                  diets={r.diets}
                  score={r.score}
                />
              ))}
            </div>
            <div className="footer">
              <Pagination recipes={recipes} />
            </div>
          </div>
        ) : (
          <div>
            <br />
            <b class="loading">Loading...</b>
          </div>
        )}
      </div>
    );

}
