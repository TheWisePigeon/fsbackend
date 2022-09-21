import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import bodyParser from "body-parser"
import config from "./config"
import announcement from "./routes/announcement"
import product from "./routes/product"
import recipe from "./routes/recipe"
import formation from "./routes/formation"
import cors from "cors"
const { connectionPool, PORT } = config

connectionPool()
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/announcement", announcement)
app.use("/product", product)
app.use("/recipe", recipe)
app.use("/formation", formation)

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT} `)
})