
import { pool } from "../../database"


async function getTeamInfoHandler(teamId: number) {
    if (typeof teamId !== 'number') throw new Error("teamId is not a number")
    const query = `SELECT  *  from sport5.teams where teamId = ?`
    const results = await pool.execute(query, [teamId]);
    const [data] = results;
    return data;
}

export { getTeamInfoHandler }

