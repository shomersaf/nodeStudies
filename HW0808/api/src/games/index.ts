import express, { Request, Response, NextFunction } from "express";
import { pool } from "../database";

const gamesRouter = express.Router();

gamesRouter.get("/", getGames);
async function getGames(req: Request, res: Response, next: NextFunction) {
  try {
    const query3 = `SELECT 
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
    const query2 = `SELECT * FROM sport5.games INNER JOIN sport5.teams ON sport5.games.teamAId = sport5.teams.teamId OR sport5.games.teamBid = sport5.teams.teamId`;
    const query = `SELECT * from sport5.games`;
    const result = await pool.execute(query3);
    const [data] = result;
    //console.log(result)
    res.json(data);
    return result;
  } catch (error) {
    return next(error);
  }
}
export { gamesRouter };
//GET /Games ( this API will return all the games with the teams names and colors)

//- POST /game/new - create a game with time and score
