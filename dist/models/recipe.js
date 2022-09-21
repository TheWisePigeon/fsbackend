"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RecipeSchema = new mongoose_1.default.Schema({
    name: String,
    ingredients: String,
    people: Number,
    preparation: String,
    duration: Number
});
const Recipe = mongoose_1.default.model('Recipe', RecipeSchema);
exports.default = Recipe;
