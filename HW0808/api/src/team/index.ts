
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const teamRouter = express.Router();

teamRouter.get("/",getTeam)
teamRouter.get("/new",postTeam)
teamRouter.get("/info/:teamId",getTeamInfo)


async function getTeamInfo(req:Request,res:Response,next:NextFunction){
    try{
      

        const query = `SELECT * from sport5.teams WHERE sport5.teams.teamId='${req.params.teamId}' `
     const result = await pool.execute(query)
     const [data] = result;

     console.log(data)
    res.json(data)
    return result;
    
    }catch(error){
        return next(error)
    }
    }
    

async function getTeam(req:Request,res:Response,next:NextFunction){
try{
    const {teamName}=req.body
    const query = `SELECT * from sport5.teams WHERE sport5.teams.teamName='${teamName}' `
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
res.json(data)
return result;

}catch(error){
    return next(error)
}
}


async function postTeam(req:Request,res:Response,next:NextFunction){
    try{
        const {teamName, city, mainColor, secondaryColor, semel}=req.body
        const query2 = `INSERT INTO sport5.teams (teamName, city, mainColor, secondaryColor, semel) VALUES ('${teamName}', '${city}', '${mainColor}', '${secondaryColor}', '${semel}') ;`
 
     const result = await pool.execute(query2)
     const [data] = result;
     //console.log(result)
    res.json(data)
    return result;
    
    }catch(error){
        return next(error)
    }
    }
    export { teamRouter };

