const { Router } = require('express');
const postRecipeRoute = require('./RecipesRoutes/postRecipes');
const getRecipeRoute = require('./RecipesRoutes/getRecipes');
const getDietRoute = require('./DietsRoutes/getDiets');
const router = Router();

router.use("/diets", getDietRoute);
router.use("/recipes", getRecipeRoute);
router.use("/recipes", postRecipeRoute);

module.exports = router;