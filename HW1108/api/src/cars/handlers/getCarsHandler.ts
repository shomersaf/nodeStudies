
    
import { pool } from "../../database"

async function getCarsHandler() {
    const query = `SELECT * from carrental.cars`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getCarsHandler }