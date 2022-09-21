"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FormationSchema = new mongoose_1.default.Schema({
    name: String,
    price: Number,
    duration: Number,
    description: String
});
const Formation = mongoose_1.default.model('Formation', FormationSchema);
exports.default = Formation;
