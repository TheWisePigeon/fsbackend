"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const config = {
    connectionPool: db_1.default,
    PORT,
    DB_URL
};
exports.default = config;
