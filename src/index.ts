import express from "express"
import * as dotenv from "dotenv"
import bodyParser from "body-parser"
import config from "./config"
import announcement from "./routes/announcement"
import product from "./routes/product"
import recipe from "./routes/recipe"
import formation from "./routes/formation"

dotenv.config()

const app = express()
const { connectionPool, PORT } = config
app.use(bodyParser.json())
app.use("/announcement", announcement)
app.use("/product", product)
app.use("/recipe", recipe)
app.use("/formation", formation)

app.listen(PORT, async ()=>{
    await connectionPool()
    console.log(`App listening on port ${PORT} `)
})