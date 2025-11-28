import Recipe from "../Modules/recipeSchema.js";

// Create a new recipe

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body); //req.body and assign in a single line.
    await newRecipe.save();
    res
      .status(200)
      .json({ message: "Recipe Added Successfully", data: newRecipe });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot Add the Recipe, Error in create Recipe" });
      console.log(error);
  }
};

//Get Recipe

export const getAllRecipe = async (req, res) => {
  try {
    const getRecipe = await Recipe.find();
    res
      .status(200)
      .json({ message: "Recipe Retrieved Successfully", data: getRecipe });
  } catch (error) {
    res.status(503).json({
      message: "Cannot Retrieve the Recipe, Error in get all Recipe",
    });
  }
};

// get Recipe by id

export const getRecipeById = async (req, res) => {
  try {
    const RecipeId = req.params.id;
    const RecipeDetail = await Recipe.findById(RecipeId);
    if (!RecipeDetail) {
      res.status(404).json({ message: "Recipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "Recipe Retrieved Successfully", data: RecipeDetail });
  } catch (error) {
    res.status(503).json({
      message: "Cannot Retrieve the Recipe, Error in get Recipe by id",
    });
  }
};

// Update Recipe

export const updateRecipe = async (req, res) => {
  try {
    const RecipeId = req.params.id;
    const updatedRecipe = await Recipe.findByIdAndUpdate(RecipeId, req.body, {
      new: true,
    }); //to return the updated document
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }       

    res
      .status(200)
      .json({ message: "Recipe Updated Successfully", data: updatedRecipe });
  } catch (error) {
    res.status(503).json({
      message: "Cannot Update the Recipe, Error in update Recipe",
    });
  }
};

// Delete Recipe (Optional)

export const deleteRecipe = async (req, res) => {     
  try {
    const RecipeId = req.params.id;
    const deletedRecipe = await Recipe.findByIdAndDelete(RecipeId);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe Not Found" });
    } 
    res
      .status(200)
      .json({ message: "Recipe Deleted Successfully", data: deletedRecipe });
  } catch (error) {
    res.status(503).json({
      message: "Cannot Delete the Recipe, Error in delete Recipe",
    });
  }
};  