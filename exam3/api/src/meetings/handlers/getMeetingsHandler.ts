
    
import { pool } from "../../database"

async function getMeetingsHandler() {
    const query = `SELECT * from exam.meetings JOIN exam.teams on exam.meetings.teamId = exam.teams.id;`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getMeetingsHandler }