const  router  = require('express').Router();
const { Diet } = require('../db');


// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res){
  const diets = await Diet.findAll()
  res.json(diets);

})

module.exports = router;