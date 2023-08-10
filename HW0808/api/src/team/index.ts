import express, { Request, Response, NextFunction } from "express";
import { pool } from "../database";
import { getTeamInfoHandler } from "./handlers/getTeamInfoHandler";
import { getTeamHandler } from "./handlers/getTeamHandler";
import { postTeamHandler } from "./handlers/postTeamHandler";

const teamRouter = express.Router();

teamRouter.get("/", getTeam);
teamRouter.post("/new", postTeam);
teamRouter.get("/info/:teamId", getTeamInfo);

async function getTeamInfo(req: Request, res: Response, next: NextFunction) {
  try {
    const teamId = Number(req.params.teamId);
    if (isNaN(teamId)) throw new Error("teamId is not a Number");
    const result = await getTeamInfoHandler(teamId);
    console.log(result);
    res.json(result);
  } catch (error) {
    //  logger.error(error.message)
    return next(error);
  }
}



async function getTeam(req: Request, res: Response, next: NextFunction) {
  try {
    const { teamName } = req.body;
    if (isNaN(teamName)) throw new Error("teamName is absent");
    const result = await getTeamHandler(teamName);
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function postTeam(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("!!!!!!");
    console.log(req.body);
    const { teamName, city, mainColor, secondaryColor, semel } = req.body;
    const result = await postTeamHandler(teamName, city, mainColor, secondaryColor, semel);
    const [data] = result;
    console.log(data);
    res.json(result);
    return data;
   } catch (error) {
    return next(error);
   }
}

export { teamRouter };
