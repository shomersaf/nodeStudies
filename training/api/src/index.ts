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
import { usersRouter } from './users';
import { mycartRouter } from './mycart';



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
app.use("/users", usersRouter)
app.use("/customers", customersRouter)
app.use("/employees", employeesRouter)
app.use("/cart", cartRouter)
app.use("/mycart", mycartRouter)
app.use("/suppliers", suppliersRouter)
app.use("/shippers", shippersRouter)
app.use("/products", productsRouter)

app.use("/orders", ordersRouter)


