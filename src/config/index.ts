import connectionPool from "./db"
const PORT  = process.env.PORT || 5000
const DB_URL = process.env.DB_URL


const config = {
    connectionPool,
    PORT,
    DB_URL
}

export default config