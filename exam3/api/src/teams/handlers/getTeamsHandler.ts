
    
import { pool } from "../../database"

async function getTeamsHandler() {
    const query = `SELECT * from exam.teams`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getTeamsHandler }