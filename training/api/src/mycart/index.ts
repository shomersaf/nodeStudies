
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";
import jsonwebtoken from "jsonwebtoken"
const mycartRouter = express.Router();


mycartRouter.get("/",getMYCart)


async function getMYCart(req:Request,res:Response,next:NextFunction){
try{
    const token = req.query.currentToken
    const user = parseJwt(token)
    const userEmail = user.userName
   // const query = `SELECT * from northwind.carts`
   const query =`SELECT * FROM northwind.carts WHERE Email='${userEmail}' ORDER BY OrderDAte DESC;`
 const result = await pool.execute(query)
 const [data] = result;
 //console.log(result)
res.json(data)
return result;

}catch(error){
    return next(error)
}
}






export { mycartRouter };

function parseJwt (token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    

    return JSON.parse(jsonPayload);
};