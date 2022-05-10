import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByTitle } from '../actions/index';
import './SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");


  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipesByTitle(name));
    setName("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} class="searchGroup">
        <div>
          <input
            type="text"
            value={name}
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            class="searchInput"
          />
          <button type="submit" class="searchButton">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}