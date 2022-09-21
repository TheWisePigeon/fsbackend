"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AnnouncementSchema = new mongoose_1.default.Schema({
    title: String,
    media: String,
    description: String,
});
const Annoucement = mongoose_1.default.model('Annoucement', AnnouncementSchema);
exports.default = Annoucement;
