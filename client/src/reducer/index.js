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
    }  


    return state;
  }



  export default reducer;