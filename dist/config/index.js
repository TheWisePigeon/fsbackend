"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const PORT = process.env.PORT || 3000;
const config = {
    connectionPool: db_1.default,
    PORT
};
exports.default = config;
