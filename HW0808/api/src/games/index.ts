import express, { Request, Response, NextFunction } from "express";
import { getGamesHandler } from "./handlers/getGamesHandler";


const gamesRouter = express.Router();
gamesRouter.get("/", getGames);

async function getGames(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getGamesHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

export { gamesRouter };

