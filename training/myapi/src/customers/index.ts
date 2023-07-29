
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const customersRouter = express.Router();

customersRouter.get("/",getCustomers)
async function getCustomers(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT * from northwind.customers`
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
res.json(data)
return result;

}catch(error){
    return next(error)
}
}
export { customersRouter };