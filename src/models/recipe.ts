import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
    people: Number,
    preparation: String,
    duration: Number
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

export default Recipe