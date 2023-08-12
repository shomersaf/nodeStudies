
    
import { pool } from "../../database"

async function getRentalsHandler() {
    const query = `SELECT * from carrental.rentals`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getRentalsHandler }