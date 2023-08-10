
import { pool } from "../../database"

async function getTeamHandler(teamName: string) {
    if (typeof teamName !== 'string') throw new Error("teamId is not a string")
    const query = `SELECT * from sport5.teams WHERE sport5.teams.teamName=?`
    const results = await pool.execute(query, [teamName]);
    const [data] = results;
    return data;
}

export { getTeamHandler }