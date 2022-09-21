import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
    title: String,
    media: String,
    description: String,
})

const Annoucement = mongoose.model('Annoucement', AnnouncementSchema)

export default Annoucement