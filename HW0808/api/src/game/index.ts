
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const gameRouter = express.Router();

gameRouter.get("/")
gameRouter.post("/new",postGame)




async function postGame(req:Request,res:Response,next:NextFunction){
    try{
        const {gameTimeA, TeamA, TeamA_score, TeamB_score, TeamB}=req.body

       const query1= `SELECT teamId as teamAId FROM sport5.teams WHERE teamName ='${TeamA}';`
       const result1 = await pool.execute(query1)
       const [data1] = result1;
       const TeamAId = Object.values(data1)[0].teamAId;
    
       const query2= `SELECT teamId as teamAId FROM sport5.teams WHERE teamName ='${TeamB}';`
       const result2 = await pool.execute(query2)
       const [data2] = result2;
       const TeamBid = Object.values(data2)[0].teamAId;
      
       const query3=`INSERT INTO sport5.games (gameTime, teamAId, teamAScore, teamBscore, teamBid) VALUES ('${gameTimeA}', '${TeamAId}', '${TeamA_score}', '${TeamB_score}', '${TeamBid}');`
       const result3 = await pool.execute(query3)
       const [data3] = result3;
     

   res.json(data3)
    return result3;
  
    }catch(error){
        return next(error)
    }
    }
    export { gameRouter };

