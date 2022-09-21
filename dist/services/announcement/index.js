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
const announcement_1 = __importDefault(require("../../models/announcement"));
const utils_1 = __importDefault(require("../../utils"));
const { logger } = utils_1.default;
const createAnnoucement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, media, description } = req.body;
    const newAnnouncement = new announcement_1.default({
        title,
        media,
        description
    });
    newAnnouncement.save((err, result) => {
        if (err) {
            logger("error", `Failed to insert anouncement ${err.message} `);
            return res.status(500).send("Something went wrong");
        }
        logger("success", `New announcement added ${result.id}`);
    });
    return res.status(200).send({
        data: newAnnouncement
    });
});
const getAnnoucements = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const announcements = yield announcement_1.default.find();
        logger("success", "Announcements fetched");
        return res.status(200).send({
            data: announcements
        });
    }
    catch (error) {
        logger("error", `Failed to fetch announcements ${error}`);
        return res.status(500).send("Something went wrong");
    }
});
const updateAnnoucement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const { title, media, description } = req.body;
    yield announcement_1.default.findByIdAndUpdate(id, { title, media, description });
    const updatedAnnouncement = yield announcement_1.default.findById(id);
    res.status(200).send({
        data: updatedAnnouncement
    });
});
const deleteAnnoucement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const deletedAnnouncement = yield announcement_1.default.findByIdAndDelete(id);
    return res.status(200).send({
        data: deletedAnnouncement
    });
});
const announcementService = {
    createAnnoucement,
    getAnnoucements,
    updateAnnoucement,
    deleteAnnoucement
};
exports.default = announcementService;
