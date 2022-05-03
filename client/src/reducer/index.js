const initialState = {
    recipes: [],
    recipeNameFilter:[],
    recipeDetail: {},
    currentPage:1,
    itemsPerPage:9,
    recipeOrder:{order:'',dir:''},
    recipeDiets:[],
    dietsFilter:[],
    recipeForm:{
      title:'',
      summary:'',
      score:'',
      healthyness:'',
      steps:'',
      image:'',
      diets:[]
    }
  };

  function reducer(state = initialState, action) {
    if (action.type === "POST_RECIPE") {
      return {
          ...state,
          recipeForm: action.payload
      };
  }

    if (action.type === "GET_RECIPES") {
      return {
          ...state,
          recipes: action.payload
      };
    }
  
    if (action.type === "GET_RECIPE_ID") {
        return {
            ...state,
            recipeDetail: action.payload
        };
    }

    if (action.type === "GET_RECIPES_TITLE") {
      return {
          ...state,
          recipes: action.payload
      };
    }

    if(action.type === "FILTER_CREATED"){
      const recipes = state.recipes;
      const createdFilter =
        action.payload === "created"
          ? recipes.filter((e) => e.createdInDb)
          : recipes.filter((e) => !e.createdInDb);
      return {
        ...state,
        filterRecipes: action.payload === "all" ? state.recipes : createdFilter,
    } } 


    if (action.type === "CHANGE_PAGE") {

      return {
          ...state,
          currentPage: action.payload
      };
    }

    if (action.type === "REMOVE_DIET_FORM") {
      return {
        ...state,
        recipeForm:{
          ...state.recipeForm,
          diets:state.recipeForm.diets.filter(diet=> diet !== action.payload)
        }
      }
    }  

    if (action.type === "ADD_DIET_FORM") {
      return {
        ...state,
        recipeForm:{
          ...state.recipeForm,
          diets:state.recipeForm.diets.includes(action.payload)?
          state.recipeForm.diets:state.recipeForm.diets.concat(action.payload)
        }
      }
    }

    if (action.type === "SET_RECIPE_FORM") {
      return {
          ...state,
          recipeForm: action.payload
      };
    }

    return state;
  }



  export default reducer;