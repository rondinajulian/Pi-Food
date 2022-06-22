import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import {
  orderByName,
  orderByPoints,
  getRecipes,
  getDiets,
  filterRecipesByType
} from "../actions";
import Pagination from "./Pagination";
import Card from "./Card";
import Navbar from "./Navbar";




export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipeDiets = useSelector((state)=> state.recipeDiets)
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const currentPage = useSelector((state) => state.currentPage);
  const [/* order */, setOrder] = useState("");
  const [/* currentpage */, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);




  async function getData() {
    await dispatch(getRecipes());
    await dispatch(getDiets());
    if(recipes==="No se encontraron recetas") return setLoaded(false);
    else setLoaded(true);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterRecipesByType(e.target.value));
    setCurrentPage(1);
  }

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



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes.slice(indexOfFirstitem, indexOfLastItem);

    return (
      <div>
        <Navbar setpage={setCurrentPage} ></Navbar>

        <div class="content">
          <select
            name="orderAlphabetic"
            onChange={(e) => handleSortName(e)}
            class="button"
          >
            <option>name</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
          </select>
          <select
            name="orderPoints"
            onChange={(e) => handleSortPoints(e)}
            class="button"
          >
            <option>Score</option>
            <option value="asc">Max-Min</option>
            <option value="des">Min-Max</option>
          </select>

          <select
            onChange={(e) => handleFilterType(e)}
            class="button"
          >
            <option value="all">All Types</option>
            {recipeDiets.map((type) => {
              return (
                <option value={type.name} key={type.id}>
                  {type.name}
                </option>
              );
            })}
          </select>
        </div>

        {loaded ? (
          <div class="subconteiner">
            <div class="content">
              {currentItems.length? currentItems.map((r, id) => (
                <Card
                  id={r.id}
                  key={id}
                  title={r.title}
                  image={r.image}
                  diets={r.diets}
                  score={r.score}
                />
              )):(
                <div>
                  <br />
                  <b>"No se encontraron recetas"</b>
                </div>
                
              )}
            </div>
            <div className="footer">
              <Pagination recipes={recipes} />
            </div>
          </div>
        ) : (
          <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        )}
      </div>
    );

}
