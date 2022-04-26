import axios from 'axios';

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
    let recipes = await axios.get("/recipes");
    return dispatch({
      type: "GET_RECIPES_TITLE",
      payload: recipes.data,
    });
  }
}

export function getRecipesByid(id) {
    return (dispatch) => {
      axios.get("http://localhost:3002/api/recipes?"+id)
        .then((response)=> dispatch({ type: "GET_RECIPES_ID", payload: response }));
        
    };
  }

export function getDiets() {
    return function(dispatch) {
      console.log('adsad')
        axios.get("http://localhost:3002/types")
          .then((response) =>  dispatch({ type: "GET_DIETS", payload: response }))
          
      };
  } 

  export function postRecipe(recipe) {
    return function(dispatch) {

        axios({
            method: 'post',
            url: "http://localhost:3002/api/recipe/",
            data: recipe
          }
          .then(() => {
            dispatch({ type: "POST_RECIPE", payload:{
              title:'',
              summary:'',
              score:'',
              image:'',
              healthyness:'',
              steps:'',
              diets:[]
            } });
          })
          );
     
      };
    }