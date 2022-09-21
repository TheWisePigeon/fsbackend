import express, { Express, Response, Request } from "express"
import * as dotenv from "dotenv"
import bodyParser from "body-parser"
import utils from "../src/utils"
import config from "./config"

dotenv.config()

const app = express()
const { connectionPool } = config

const PORT = process.env.PORT || 3000
app.listen(PORT, async ()=>{
    await connectionPool()
    console.log(`App listening on port ${PORT} `)
})