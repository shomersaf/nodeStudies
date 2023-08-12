
import express, { Request, Response, NextFunction } from "express"
import { postCarHandler } from "./handlers/postCarHandler";
import { getCarsHandler } from "./handlers/getCarsHandler";

const carsRouter = express.Router();

carsRouter.get("/",getCars)
carsRouter.post("/new",postCar)


async function getCars(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getCarsHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function postCar(req: Request, res: Response, next: NextFunction) {
    try {

      const {car, lp, color, engine, company, img}=req.body
      if (isNaN(engine)) throw new Error("Engine Data should be a number");
      const result = await postCarHandler(car, lp, color, Number(engine), company, img);
      console.log(result);
      res.json(result);
    } catch (error) {
      return next(error);
    }
  }

    export { carsRouter };

