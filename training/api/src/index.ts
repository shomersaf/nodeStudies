import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { productsRouter } from './products';
import { customersRouter } from './customers';
import { employeesRouter } from './employees';
import { ordersRouter } from './orders';
import { suppliersRouter } from './suppliers';
import { shippersRouter } from './shippers';
import { cartRouter } from './cart';
import { signupRouter } from './signup';
import { loginRouter } from './login';
import jsonwebtoken from "jsonwebtoken"

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())
app.listen(process.env.PORT,()=> {
    console.log({ message: `Api is running on Port ${process.env.PORT}` })
})
app.get("/health-check", function (req, res, next) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})
app.use("/signup", signupRouter)
app.use("/login", loginRouter)

app.use("/customers", customersRouter)
app.use("/employees", employeesRouter)
app.use("/cart", cartRouter)

app.use("/suppliers", suppliersRouter)
app.use("/shippers", shippersRouter)
app.use("/products", productsRouter)
app.use(verifyAuthentication)
app.use("/orders", ordersRouter)


function verifyAuthentication(req: Request, res: Response, next:NextFunction) {
    const { authorization: token } = req.headers
    jsonwebtoken.verify(token as string, process.env.SECRET as string, function (err, decoded) {
        if (err) {
            console.log(`${new Date().toISOString()} => requestId: ${res.getHeader("x-request-id")} | User Token invalid ${err.message}`)
        
            return res.status(401).send("Authentication error")
        } else {
            (req as any).currentEmail = decoded;
         
            console.log(`${new Date().toISOString()} => requestId: ${res.getHeader("x-request-id")} | User authenticated Successfully`)
            return next()
        }
    });
}