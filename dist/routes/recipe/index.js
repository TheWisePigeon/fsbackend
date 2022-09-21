"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipe_1 = __importDefault(require("../../services/recipe"));
const router = (0, express_1.Router)();
router.route("/create").post(recipe_1.default.createRecipe);
router.route("/get").get(recipe_1.default.getRecipes);
router.route("/get/:id").post(recipe_1.default.getRecipe);
router.route("/update/:id").post(recipe_1.default.updateRecipe);
router.route("/delete/:id").post(recipe_1.default.deleteRecipe);
exports.default = router;
