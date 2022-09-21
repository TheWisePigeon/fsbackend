"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_1 = __importDefault(require("../../models/recipe"));
const createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, ingredients, people, preparation, duration } = req.body;
    const newRecipe = new recipe_1.default({
        name, ingredients, people, preparation, duration
    });
    newRecipe.save((err, result) => {
        if (err) {
            return res.status(500).send("Something went wrong");
        }
        return res.status(200).send({
            data: result
        });
    });
});
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield recipe_1.default.find();
    res.status(200).send({
        data: recipes
    });
});
const getRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const updateRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, ingredients, people, preparation, duration } = req.body;
    yield recipe_1.default.findByIdAndUpdate(id, { name, ingredients, people, preparation, duration });
    const updatedRecipe = yield recipe_1.default.findById(id);
    return res.status(200).send({
        data: updatedRecipe
    });
});
const deleteRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const deletedRecipe = yield recipe_1.default.findByIdAndDelete(id);
    return res.status(200).send({
        data: deletedRecipe
    });
});
const recipeService = {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe
};
exports.default = recipeService;
