
    
import { pool } from "../../database"

async function getCarsForRentalHandler() {
    const query = `SELECT * from carrental.cars`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getCarsForRentalHandler }