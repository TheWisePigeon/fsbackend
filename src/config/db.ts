import mongoose from "mongoose";
import utils from "../utils";
import config from ".";
const { logger } = utils

const connectionPool = async () => {
    mongoose
        .connect("mongodb://localhost:27017/", {

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