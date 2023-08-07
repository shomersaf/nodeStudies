
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";
import jsonwebtoken from "jsonwebtoken"
const cartRouter = express.Router();

cartRouter.get("/",getAllCarts)

cartRouter.post("/addToCart/:ProductID/:ProductName/:ProductPrice/:ProductQuantity",postCart)

async function getAllCarts(req:Request,res:Response,next:NextFunction){
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




async function postCart(req:Request,res:Response,next:NextFunction){
    try{
        const OrderDate =new Date().toISOString().slice(0, 19).replace('T', ' ');
        //console.log("req.body.signedToken", req.body.signedToken) 
        const token = req.body.signedToken
       const user = parseJwt(token)
      // console.log(user.userName)
       const userEmail =user.userName
      const query = `INSERT INTO northwind.carts (ProductName, ProductID, ProductPrice, ProductQuantity, Email, OrderDAte) VALUES ('${req.params.ProductName}','${req.params.ProductID}', '${req.params.ProductPrice}', '${req.params.ProductQuantity}', '${userEmail}', '${OrderDate}')`
    
    const result = await pool.execute(query)
    const [data] = result;
     
    res.json(data)
    return req;
    
    }catch(error){
        return next(error)
    }
    }
export { cartRouter };

function parseJwt (token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    

    return JSON.parse(jsonPayload);
};