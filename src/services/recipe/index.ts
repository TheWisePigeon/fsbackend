import  { Request, Response } from "express"
import Recipe from "../../models/recipe"

const createRecipe = async (req: Request, res: Response) => {
    const { name, ingredients, people, preparation, duration } = req.body
    const newRecipe = new Recipe({
        name, ingredients, people, preparation, duration
    })
    newRecipe.save((err, result)=>{
        if(err){
            return res.status(500).send("Something went wrong")
        }
        return res.status(200).send({
            data: result
        })
    })
}

const getRecipes = async (req: Request, res: Response)=>{
    const recipes = await Recipe.find()
    res.status(200).send({
        data: recipes
    })
}

const getRecipe = async (req: Request, res: Response)=>{
    
}

const updateRecipe = async (req: Request, res: Response)=>{
    const { id, name, ingredients, people, preparation, duration } = req.body
    await Recipe.findByIdAndUpdate(id, {name, ingredients, people, preparation, duration})
    const updatedRecipe = await Recipe.findById(id)
    return res.status(200).send({
        data: updatedRecipe
    })
}

const deleteRecipe = async (req: Request, res: Response)=>{
    const { id } = req.body
    const deletedRecipe = await Recipe.findByIdAndDelete(id)
    return res.status(200).send({
        data: deletedRecipe
    })
}   

const recipeService = {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe
}

export default recipeService