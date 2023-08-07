
import express, { Request, Response, NextFunction } from "express"
import { getAllCustomers } from "./handlers/getAllCustomers";
import { logger } from "../logger"
import { getCustomerById } from "./handlers/getCustomerById";
import { getCustomerByName } from "./handlers/getCustomersByName";
import { getCustomersCountHandler } from "./handlers/getCustomersCount";
const customersRouter = express.Router();

customersRouter.get("/", getCustomers)
customersRouter.get("/search", search)
customersRouter.get("/count", getCustomersCount)
customersRouter.get("/:id", getCustomer)


// no input 
async function getCustomers(req: Request, res: Response, next: NextFunction) {
    try {
        const { extended, limit } = req.query;
        const isExtended = extended === "true"
        const results = await getAllCustomers(+limit, isExtended)
        res.json(results)
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}
// input - id 
async function getCustomer(req: Request, res: Response, next: NextFunction) {
    try {
        const customerId = req.params.id
        const customerIdNumber = Number(customerId)
        if (isNaN(customerIdNumber)) throw new Error("Id is not a valid Number")
        const result = await getCustomerById(customerIdNumber)
        res.json(result)
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}
// input - name: string, required, 
async function search(req: Request, res: Response, next: NextFunction) {
    try {
        const text = req.query.q
        if (!text) throw new Error("Mising search input")
        const result = await getCustomerByName(text as string)
        res.json(result)
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}

async function getCustomersCount(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await getCustomersCountHandler()
        res.json({ count: result })
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}

export { customersRouter };