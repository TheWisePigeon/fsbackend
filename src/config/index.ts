import connectionPool from "./db"
const PORT  = process.env.PORT || 3000

const config = {
    connectionPool,
    PORT
}

export default config