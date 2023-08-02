
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const cartRouter = express.Router();

cartRouter.get("/",getCarts)
cartRouter.post("/addToCart/:ProductID/:ProductName/:ProductPrice/:ProductQuantity",getCart)

async function getCarts(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT * from northwind.carts`
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
res.json(data)
return result;

}catch(error){
    return next(error)
}
}

async function getCart(req:Request,res:Response,next:NextFunction){
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
export { cartRouter };