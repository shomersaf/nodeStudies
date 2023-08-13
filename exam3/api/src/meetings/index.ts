
import express, { Request, Response, NextFunction } from "express"
import { postMeetingHandler } from "./handlers/postMeetingHandler";
import { getMeetingsHandler } from "./handlers/getMeetingsHandler";
import { getTeamForMeetingHandler } from "./handlers/getTeamForMeetingHandler";

const meetingsRouter = express.Router();

meetingsRouter.get("/",getMeetings)
meetingsRouter.get("/new",getTeamForMeeting)
meetingsRouter.post("/new",postMeeting)


async function getMeetings(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getMeetingsHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function getTeamForMeeting(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getTeamForMeetingHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function postMeeting(req: Request, res: Response, next: NextFunction) {
    try {
      const {
         teamName, fromDate, toDate, topic, room}=req.body
      if (isNaN(room)) throw new Error("pricePerDay should be a number");
      const result = await postMeetingHandler(
         teamName, fromDate, toDate, topic, 
        Number(room));
      console.log(result);
      res.json(result);
    } catch (error) {
      return next(error);
    }
  }

    export { meetingsRouter };

   
