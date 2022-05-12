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
  
    if (action.type === "GET_RECIPES_ID") {
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

    if(action.type === "FILTER_BY_TYPE"){
      const recipes = state.recipes;
      const recipeByDiets = 
      action.payload === "all"
      ?recipes
      :recipes.filter((r)=>{
        let names = r.diets
        if(names.includes(action.payload)) return r;
        console.log(r)
      })
      return{
        ...state,
        recipes:recipeByDiets
      }
    };

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


    if(action.type === "ORDER_BY_NAME" ){
      const sortedArrName =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.title > b.title) return -1;
              if (a.title < b.title) return 1;
              return 0;
            });
            console.log(sortedArrName)
      return {
        ...state,
        recipes: sortedArrName,
      };
    }

    if(action.type==="ORDER_BY_POINTS"){ 
      const sortedArrPoints =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.score > b.score) return 1;
              if (a.score < b.score) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.score > b.score) return -1;
              if (a.score < b.score) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: sortedArrPoints,
      };
    }

    if(action.type === "GET_DIETS"){
      return {
        ...state,
        recipeDiets: action.payload,
      }
    } 
     




    return state;
  }



  export default reducer;