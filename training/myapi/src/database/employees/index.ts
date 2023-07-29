
import express, { Request, Response, NextFunction } from "express"
import { pool } from "..";


const customersRouter = express.Router();

customersRouter.get("/",getProducts)
async function getProducts(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT * from northwind.customers`
 const result = await pool.execute(query)
 const [data] = result;
 console.log(result)
 res.json(data)

}catch(error){
    return next(error)
}
}
export { customersRouter };