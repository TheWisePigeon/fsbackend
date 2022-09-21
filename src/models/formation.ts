import mongoose from "mongoose";

const FormationSchema = new mongoose.Schema({
    name: String,
    price: Number,
    duration: Number,
    description: String
})

const Formation = mongoose.model('Formation', FormationSchema)

export default Formation