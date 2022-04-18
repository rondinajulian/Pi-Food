const router = require('express').Router();
const axios = require('axios');
const { conn,Recipe,Diet } = require('../db');
const { Op } = require("sequelize");
const {API_KEY} = process.env;
const recipeNumb = 12
// const fetch = require('node-fetch');
// require('dotenv').config();
// const isUUID = require('is-uuid');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// -------- primera peticion que devuelve las recetas --------------
router.get('/', async (req,res) =>{

  const title = req.query.name
  var recipes =[]

try {
 const respuesta = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${recipeNumb}&addRecipeInformation=true`)
  const recipe = respuesta.data.results;

  if(respuesta.status === 200){
     recipes = recipe.map(r=>({
      id:r.id,
      title:r.title,
      summary:r.summary,
      score: r.spoonacularScore,
      healthyness:r.healthScore,
      image:r.image,
      diets:r.diets,
      steps:(r.analyzedInstructions && r.analyzedInstructions.steps?r.analyzedInstructions.steps.map(item=>item.step).join("|"):'')
      }))
    }
    // ----filtro dentro de la api----
    if(title) recipes = recipes.filter(r=> r.title.includes(title))  
     
       
     prueba(res,recipes,title)

} catch (error) {

  res.send('el error: ' + error)
  
}
   
})


// ------ funciones de filtrado en db ------ 

function prueba (res,recipes,title){
  // const filter={};


  // if(title){
  //   filter ={
      
  //   }
  // }
  res.send(recipes)
}




module.exports = router;

