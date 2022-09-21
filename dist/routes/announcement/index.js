"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const announcement_1 = __importDefault(require("../../services/announcement"));
const router = (0, express_1.Router)();
router.route("/create").post(announcement_1.default.createAnnoucement);
router.route("/get").get(announcement_1.default.getAnnoucements);
router.route("/get/:id").post(announcement_1.default.getAnnoucement);
router.route("/update/:id").post(announcement_1.default.updateAnnoucement);
router.route("/delete/:id").post(announcement_1.default.deleteAnnoucement);
exports.default = router;
