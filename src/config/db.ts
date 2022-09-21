import mongoose from "mongoose";
import utils from "../utils";
import config from ".";
const { logger } = utils

const databaseUrl = process.env.DB_URL || "mongodb://localhost:27017/fs101"
const connectionPool = async () => {
    mongoose
        .connect(databaseUrl, {

        })
        .then(
            ()=>{
                logger("success", "Connected to database")
            }
        )
        .catch(
            (err)=>{
                logger("error", `Failed to connect to database: ${err}`)
            }
        )
}
export default connectionPool