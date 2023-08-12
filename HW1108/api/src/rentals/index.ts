
import express, { Request, Response, NextFunction } from "express"
import { postRentalHandler } from "./handlers/postRentalHandler";
import { getRentalsHandler } from "./handlers/getRentalsHandler";
import { getCarsForRentalHandler } from "./handlers/getCarsForRentalHandler";

const rentalsRouter = express.Router();

rentalsRouter.get("/",getRentals)
rentalsRouter.get("/new",getCarsForRental)
rentalsRouter.post("/new",postRental)


async function getRentals(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getRentalsHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function getCarsForRental(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getCarsForRentalHandler();
    console.log(result);
    res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function postRental(req: Request, res: Response, next: NextFunction) {
    try {

      const {
        car,
        fromDate,
        toDate,
        pricePerDay}=req.body
      if (isNaN(pricePerDay)) throw new Error("pricePerDay should be a number");
      const result = await postRentalHandler(
        car,
        fromDate,
        toDate,
        Number(pricePerDay));
      console.log(result);
      res.json(result);
    } catch (error) {
      return next(error);
    }
  }

    export { rentalsRouter };

   
