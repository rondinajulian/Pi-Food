import React from "react";
import './Navbar.css'
import SearchBar from "./SearchBar";

export default function Navbar(setpage){
    return(
        <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Home">Recipe.Pi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link-active" aria-current="page" href="/CreateRecipe">Create Your Recipe</a>
        </li>
      </ul>
      <SearchBar></SearchBar>
    </div>
  </div>
</nav>
        </div>
    )

}