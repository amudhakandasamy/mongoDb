import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({   
    
    recipename: {
    type: String,       
    required: true,
  },
 
    procedure: {
    type: String,
    required: true,  
},
  duration: {
    type: Number,   
    required: true,
  }
});    
    

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;  