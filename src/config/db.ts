import mongoose from "mongoose";
import utils from "../utils";
const { logger } = utils

const connectionPool = async () => {
    mongoose
        .connect(process.env.DB_URL as string, {

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