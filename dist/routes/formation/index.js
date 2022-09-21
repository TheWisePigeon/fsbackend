"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formation_1 = __importDefault(require("../../services/formation"));
const router = (0, express_1.Router)();
router.route("/create").post(formation_1.default.createFormation);
router.route("/get").get(formation_1.default.getFormations);
router.route("/update").put(formation_1.default.updateFormation);
router.route("/delete").delete(formation_1.default.deleteFormation);
exports.default = router;
