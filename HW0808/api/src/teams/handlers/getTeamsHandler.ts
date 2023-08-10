
    
import { pool } from "../../database"

async function getTeamsHandler() {
    const query = `SELECT * from sport5.teams`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getTeamsHandler }