
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const productsRouter = express.Router();

productsRouter.get("/",getProducts)


async function getProducts(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT 
    ProductID, ProductName, CategoryName, Unit, Price
FROM
    northwind.products
        JOIN
    northwind.categories ON northwind.products.CategoryID = northwind.categories.CategoryID`
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
 res.json(data)

}catch(error){
    return next(error)
}
}


export { productsRouter };