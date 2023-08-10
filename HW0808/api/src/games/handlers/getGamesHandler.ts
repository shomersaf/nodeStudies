
import { pool } from "../../database"

async function getGamesHandler() {
  const query = `SELECT 
          tableA.gameTimeA,
            tableA.TeamA,
                    tableA.TeamA_score,
                     tableB.TeamB_score,
           tableB.TeamB
       FROM
          ( SELECT
               sport5.games.gameTime as gameTimeA,
                   sport5.teams.teamName AS TeamA,
                   sport5.games.teamAScore AS TeamA_score
           FROM
               sport5.games
                   JOIN
               sport5.teams ON sport5.games.teamBid = sport5.teams.teamId) as tableA JOIN
       (SELECT 
           sport5.games.gameTime as gameTimeB,
           sport5.teams.teamName AS TeamB,
           sport5.games.teamBScore AS TeamB_score
       FROM
           sport5.games
               JOIN
           sport5.teams ON sport5.games.teamAId = sport5.teams.teamId) as tableB ON tableA.gameTimeA=tableB.gameTimeB;`;
  const results = await pool.execute(query);
  const [data] = results;
  return data;
}

export { getGamesHandler }