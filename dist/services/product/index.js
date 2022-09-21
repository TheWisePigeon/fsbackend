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
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const productService = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};
exports.default = productService;
