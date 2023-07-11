
import express, { Request, Response, NextFunction } from "express"
import { getAllEmployees } from "./handlers/getAllEmployees";
import { logger } from "../logger"
import { getEmployeesBetweenHandler } from "./handlers/getEmployeesBetweenHandler";
const employeesRouter = express.Router();

employeesRouter.get("/", getEmployees)


async function getEmployees(req: Request, res: Response, next: NextFunction) {
    try {
        const results = await getAllEmployees()
        res.json(results)
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}


async function getEmployeesBetween(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await getEmployeesBetweenHandler()
        res.json({ count: result })
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}

export { employeesRouter };