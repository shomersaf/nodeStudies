
import express, { Request, Response, NextFunction } from "express"
import { postGameHandler } from "./handlers/postGameHandler";

const gameRouter = express.Router();

gameRouter.get("/")
gameRouter.post("/new",postGame)


async function postGame(req: Request, res: Response, next: NextFunction) {
    try {
      const {gameTimeA, TeamA, TeamA_score, TeamB_score, TeamB}=req.body
      if (TeamA === TeamB) throw new Error("Team A and Team B be can't be the same!");
      const result = await postGameHandler(gameTimeA, TeamA, Number(TeamA_score), Number(TeamB_score), TeamB);
      console.log(result);
      res.json(result);
    } catch (error) {
      return next(error);
    }
  }

    export { gameRouter };

