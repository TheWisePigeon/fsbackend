"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const logger = (type, message) => {
    switch (type) {
        case "success":
            console.log(chalk_1.default.green(message));
            break;
        case "warning":
            console.log(chalk_1.default.yellow(message));
        case "error":
            console.log(chalk_1.default.red(message));
    }
};
exports.default = logger;
