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
    let recipes = await axios.get("http://localhost:3002/recipes?name="+title);
     return dispatch({
      type: "GET_RECIPES_TITLE",
      payload: recipes.data,
    });
  }; 
}

export function getRecipesByid(id) {
  return async function (dispatch) {
    const recipe = await axios.get("http://localhost:3002/recipes/"+id)
    return dispatch({ type: "GET_RECIPES_ID", payload: recipe.data})
  };
}

export function getDiets() {
  return async function (dispatch) {
    const Diets = await axios.get("http://localhost:3002/types")
      return (dispatch({ type: "GET_DIETS", payload: Diets.data }));
  };
}

export function postRecipe(payload) {
  return async function (){
    const recipe = await axios.post("http://localhost:3002/recipe",payload)
      return recipe
  }
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

export function removeDietForm(payload) {
  return { type: "REMOVE_DIET_FORM", payload };
}


export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByPoints(payload) {
  return {
    type: "ORDER_BY_POINTS",
    payload,
  };
}

export function filterRecipesByType(diet) {
  return {
      type: "FILTER_BY_TYPE",
      payload: diet
      
    }
  
}

export function getName(title){
  return async function (dispatch) {
    const name  = await axios.get("http://localhost:3002/name/:"+ title)
      return (dispatch({ type: "GET_NAME", payload: name}));
  };
}

// export function getTop(payload) {
//   return {
//       type: "GET_TOP",
//       payload: payload
      
//     }
  
// }