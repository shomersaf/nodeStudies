
import mysql2 from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql2.createPool({
    host: process.env.DB_HOST as string,
    user: 'root',
    port: 3306,
    password: "admin",
    database: 'sport5',
});

export { pool }