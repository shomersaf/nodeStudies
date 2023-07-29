
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const employeesRouter = express.Router();
const firstDATE = '1955-03-04 00:00:00'
const lastDate = '1960-05-29 00:00:00'
const query1= `SELECT * 
FROM northwind.employees  
WHERE BirthDate BETWEEN '${firstDATE}' AND '${lastDate}'`
const query2='SELECT * FROM northwind.employees;'
employeesRouter.get("/",getEmployees)
async function getEmployees(req:Request,res:Response,next:NextFunction){
try{
    const query = query1
 const result = await pool.execute(query)
 const [data] = result;
 console.log(result)
 res.json(data)

}catch(error){
    return next(error)
}
}
export { employeesRouter };