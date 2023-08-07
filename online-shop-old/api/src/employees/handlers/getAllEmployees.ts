
import { pool } from "../../database"


async function getAllEmployees() {
    const query = `SELECT * FROM northwind.employees`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}   

export { getAllEmployees }


