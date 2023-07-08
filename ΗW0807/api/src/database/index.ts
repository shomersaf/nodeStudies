// get the client
import mysql2 from 'mysql2/promise'

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql2.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'northwind',
  waitForConnections: true,
  connectionLimit: 10.
});
export {pool};