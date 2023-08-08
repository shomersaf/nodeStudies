
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const teamRouter = express.Router();

teamRouter.get("/",getTeam)
async function getTeam(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT * from sport5.teams`
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
res.json(data)
return result;

}catch(error){
    return next(error)
}
}
export { teamRouter };
//- GET /team ( this API will return the team information according to the team name sent)
//- POST /team/new - create new team with all the relevant data
