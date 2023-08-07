
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const usersRouter = express.Router();

usersRouter.get("/")
usersRouter.get("/info",getUserInfo)


async function getUserInfo(req:Request,res:Response,next:NextFunction){
    console.log(req.params.ProductName)
try{
    const query = `SELECT * from northwind.users`
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
res.json(data)
return result;

}catch(error){
    return next(error)
}
}




async function postCart(req:Request,res:Response,next:NextFunction){
    try{
        const OrderDate =new Date().toISOString().slice(0, 19).replace('T', ' ');
   
        console.log(req.params.ProductName)
      const query = `INSERT INTO northwind.carts (ProductName, ProductID, ProductPrice, ProductQuantity, OrderDAte) VALUES ('${req.params.ProductName}','${req.params.ProductID}', '${req.params.ProductPrice}', '${req.params.ProductQuantity}', '${OrderDate}')`
     
    const result = await pool.execute(query)
    const [data] = result;
     
    res.json(data)
    return req;
    
    }catch(error){
        return next(error)
    }
    }
export { usersRouter };