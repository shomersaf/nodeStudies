
import express, { Request, Response, NextFunction } from "express"
import {getTeamsHandler } from "./handlers/getTeamsHandler";

const teamsRouter = express.Router();

teamsRouter.get("/",getTeams)



async function getTeams(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getTeamsHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

    export { teamsRouter };

