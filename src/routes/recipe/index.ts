import { Router } from "express"
import recipeService from "../../services/recipe"

const router = Router()

router.route("/create").post(recipeService.createRecipe)

router.route("/get").get(recipeService.getRecipes)

router.route("/get/:id").post(recipeService.getRecipe)

router.route("/update/:id").post(recipeService.updateRecipe)

router.route("/delete/:id").post(recipeService.deleteRecipe)

export default router

