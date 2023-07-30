
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const employeesRouter = express.Router();

employeesRouter.get("/",getEmployees)
async function getEmployees(req:Request,res:Response,next:NextFunction){
    try{
        console.log("11111")
        var firstDate = new Date(String(req.query.date1))
        var secondDate = new Date(String(req.query.date2))
        console.log(firstDate)
        console.log(secondDate)
        const query = `SELECT * 
        FROM northwind.employees  
        WHERE BirthDate BETWEEN '${String(req.query.date1)}' AND '${String(req.query.date2)}'`
        const query2='SELECT * FROM northwind.employees;'
        const result = await pool.execute(query)
        const [data] = result;
        res.json(data)
    }catch(error){
        return next(error)
    }
}
export { employeesRouter };