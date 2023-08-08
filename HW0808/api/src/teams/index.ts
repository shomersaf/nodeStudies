
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const teamsRouter = express.Router();

teamsRouter.get("/",getTeams)
async function getTeams(req:Request,res:Response,next:NextFunction){
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
export { teamsRouter };
//- GET /teams (this API will return all the teams)