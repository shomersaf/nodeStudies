
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const suppliersRouter = express.Router();

suppliersRouter.get("/",getSuppliers)
async function getSuppliers(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT * from northwind.suppliers`
 const result = await pool.execute(query)
 const [data] = result;
 console.log(result)
 res.json(data)

}catch(error){
    return next(error)
}
}
export { suppliersRouter };