
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";
import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
dotenv.config()

const loginRouter = express.Router();
// interface ILoginPayload {
//     email: string,
//     password: string
// }
loginRouter.post("/",login)
async function login(req:Request,res:Response,next:NextFunction){
    try{
        const {email,password}=req.body
        const query =`SELECT HashedPassword FROM northwind.users WHERE Email='${req.body.email}';`
        const result = await pool.execute(query)
        const [data] = result;
        let checkup: any = data;
        //if (!Object.values(data)[0]?.HashedPassword) throw new Error()
        
       

       
        const isPasswordValid = bcrypt.compareSync(password,checkup[0]?.HashedPassword)
        //console.log(isPasswordValid)
        if(!isPasswordValid) { res.status(400)} else{
            const signedToken = jsonwebtoken.sign({ Email: email, role: "admin" }, process.env.SECRET as string, { expiresIn: '60m' })
            console.log(signedToken)
            res.json({ token: signedToken})
            next()
        }
        
       
    }catch(error){

        return res.status(401).send("User is unauthorized")
    }
}
export { loginRouter };