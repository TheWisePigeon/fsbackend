import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import bodyParser from "body-parser"
import config from "./config"
import announcement from "./routes/announcement"
import product from "./routes/product"
import recipe from "./routes/recipe"
import formation from "./routes/formation"
const DB_URL = process.env.NODE_ENV=="production" ? process.env.DB_URL : process.env.DB_URL_DEV
const { connectionPool, PORT } = config

connectionPool()
const app = express()
app.use(bodyParser.json())
app.use("/announcement", announcement)
app.use("/product", product)
app.use("/recipe", recipe)
app.use("/formation", formation)

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT} `)
})