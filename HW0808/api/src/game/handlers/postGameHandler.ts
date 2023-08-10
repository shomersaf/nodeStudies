
import { pool } from "../../database";

async function postGameHandler(
  gameTimeA: any,
  TeamA: string,
  TeamA_score: number,
  TeamB_score: number,
  TeamB: string
) {
  if (
    typeof TeamA !== "string" ||
    typeof TeamA_score !== "number" ||
    typeof TeamB_score !== "number" ||
    typeof TeamB !== "string"
  )
    throw new Error("Entered data is not of valid type");
  const query1 = `SELECT teamId as teamAId FROM sport5.teams WHERE teamName =?;`;
  const result1 = await pool.execute(query1, [TeamA]);
  const [data1] = result1;
  const TeamAId = Object.values(data1)[0].teamAId;
  const result2 = await pool.execute(query1, [TeamB]);
  const [data2] = result2;
  const TeamBid = Object.values(data2)[0].teamAId;
  const query3=`INSERT INTO sport5.games (gameTime, teamAId, teamAScore, teamBscore, teamBid) VALUES ('${gameTimeA}', '${TeamAId}', '${TeamA_score}', '${TeamB_score}', '${TeamBid}');`
  const result3 = await pool.execute(query3)
  const [data3] = result3;
  return data3;
}

export { postGameHandler };
