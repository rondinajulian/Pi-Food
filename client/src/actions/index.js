import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    let recipes = await axios.get("/recipes");
    return dispatch({
      type: "GET_RECIPES",
      payload: recipes.data,
    });
  };
}

export function getRecipesByTitle(title) {
  return async function (dispatch) {
    let recipes = await axios.get("http://localhost:3001/api/recipes?name="+ title);
    return dispatch({
      type: "GET_RECIPES_TITLE",
      payload: recipes.data,
    });
  };
}

export function getRecipesByid(id) {
  return async function (dispatch) {
    const recipes = axios.get("http://localhost:3002/api/recipes?" + id)
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