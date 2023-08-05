import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";
import bcrypt, { getSalt } from "bcryptjs"
const signupRouter = express.Router();
interface IPayload {
    password: string,
    email: string,
    userName: string
}
signupRouter.post("/",signup)
 async function signup(req:Request,res:Response,next:NextFunction){
try{
    //console.log(req.body)
   const {userName,email,password}=req.body
   const query1 =`SELECT * FROM northwind.users WHERE Email='${email}';`
        const result1 = await pool.execute(query1)
        const [data] = result1;
        let checkup: any = data;

        console.log(checkup.length); // OK
  
    if (checkup.length>0)  {return res.status(400).json({message:"sUCH user already exists!!"})} else{
        const salt = bcrypt.genSaltSync(3);
        const hashed = bcrypt.hashSync(password, salt as string);
     const query2 =`INSERT INTO northwind.users (FirstName, Email, HashedPassword,Salt) VALUES ('${userName}', '${email}', '${hashed}','${salt}')`
     const result2 = await pool.execute(query2)
     const [data2] = result2;
     res.json(data2)}
   

}catch(e){
console.log(e)
}

}
export { signupRouter };
//aa
//aa@aa.aa
//Rakefet71#