const router = require("express").Router();
const { conn, Recipe, Diet } = require("../db");


router.post("/", async function (req, res) {

  const { title, summary, score, image, healthyness, steps, diets } = req.body;

  try {
    const recipe = await Recipe.create({
      title,
      summary,
      score,
      image,
      healthyness,
      steps,
    });
    // await Diet.setDiets(diets)
    res.status(200).json(recipe);


  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});


module.exports= router;