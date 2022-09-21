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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formation_1 = __importDefault(require("../../models/formation"));
const logger_1 = __importDefault(require("../../utils/logger"));
const createFormation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, duration, description } = req.body;
    const newFormation = new formation_1.default({
        name, price, duration, description
    });
    newFormation.save((err, result) => {
        if (err) {
            (0, logger_1.default)("error", `Failed to create formation ${err.message}`);
            return res.status(500).send("Something went wrong");
        }
        return res.status(200).send({
            data: result
        });
    });
});
const getFormations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formations = yield formation_1.default.find();
        return res.status(200).send({
            data: formations
        });
    }
    catch (error) {
        return res.status(500).send(`Something went wrong ${error}`);
    }
});
const updateFormation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, price, duration, description } = req.body;
    yield formation_1.default.findByIdAndUpdate(id, { name, price, duration, description });
    const updatedFormation = yield formation_1.default.findById(id);
    return res.status(200).send({
        data: updatedFormation
    });
});
const deleteFormation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const deletedFormation = yield formation_1.default.findByIdAndDelete(id);
    return res.status(200).send({
        data: deletedFormation
    });
});
const formationService = {
    createFormation,
    getFormations,
    updateFormation,
    deleteFormation
};
exports.default = formationService;
