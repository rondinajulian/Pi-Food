import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    let recipes = await axios.get("http://localhost:3002/recipes");
    return dispatch({
      type: "GET_RECIPES",
      payload: recipes.data,
    });
  };
}

export function getRecipesByTitle(title) {
  return async function (dispatch) {
    let recipes = await axios.get("http://localhost:3002/recipes?name="+ title);
    return dispatch({
      type: "GET_RECIPES_TITLE",
      payload: recipes.data,
    });
  };
}

export function getRecipesByid(id) {
  return async function (dispatch) {
    const recipes = axios.get("http://localhost:3002/recipes?" + id)
    return dispatch(dispatch({ type: "GET_RECIPES_ID", payload: recipes.data}))
  };
}

export function getDiets() {
  return async function (dispatch) {
    const Diets =axios.get("http://localhost:3002/types")
      return (dispatch({ type: "GET_DIETS", payload: Diets.data }));
  };
}

export function postRecipe(recipe) {
  return function (dispatch) {
    axios(
      {
        method: "post",
        url: "http://localhost:3002/api/recipe/",
        data: recipe,
      }.then(() => {
        dispatch({
          type: "POST_RECIPE",
          payload: {
            title: "",
            summary: "",
            score: "",
            image: "",
            healthyness: "",
            steps: "",
            diets: [],
          },
        });
      })
    );
  };
}

export function updateFilter(payload) {
  return { type: "UPDATE_FILTER", payload };
}

export function filterRecipesCreated(payload, origin) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function changePage(payload) {
  return { type: "CHANGE_PAGE", payload };
}

export function addDietForm(payload) {
  return { type: "ADD_DIET_FORM", payload };
}

export function setRecipeForm(payload) {
  return { type: "SET_RECIPE_FORM", payload };
}

export function removeDietForm(payload) {
  return { type: "REMOVE_DIET_FORM", payload };
}