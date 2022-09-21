"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = __importDefault(require("../../services/product"));
const router = (0, express_1.Router)();
router.route("/create").post(product_1.default.createProduct);
router.route("/get").get(product_1.default.getProducts);
router.route("/get/:id").post(product_1.default.getProduct);
router.route("/update/:id").post(product_1.default.updateProduct);
router.route("/delete/:id").post(product_1.default.deleteProduct);
exports.default = router;
