const  router  = require('express').Router();
const { Diet } = require('../db');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res, next){
  diets = await Diet.findAll()
  return res.json(diets);

})

module.exports = router;