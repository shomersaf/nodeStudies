
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const shippersRouter = express.Router();

shippersRouter.get("/",getShippers)
async function getShippers(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT * from northwind.shippers`
 const result = await pool.execute(query)
 const [data] = result;
 console.log(result)
 res.json(data)

}catch(error){
    return next(error)
}
}
export { shippersRouter };