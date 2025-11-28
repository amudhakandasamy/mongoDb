import express from "express"
import { createRecipe, getAllRecipe, getRecipeById,updateRecipe,deleteRecipe } from "../Controllers/RecipeController.js";


const router = express.Router();

router.post("/create",createRecipe)
router.get("/getRecipes",getAllRecipe)
router.get("/getRecipeByID/:id",getRecipeById)
router.put("/updateRecipe/:id", updateRecipe);
router.delete("/deleteRecipe/:id", deleteRecipe);

export default router;