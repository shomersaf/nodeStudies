
import express, { Request, Response, NextFunction } from "express"
import productsRouter from "./products/route"
import cartsRouter from "./cart/cartsRoute"
const app = express();
app.use(express.json())
app.get("/health-check", function (req, res, next) {
    res.send("api is ok")
})

app.use("/products", productsRouter)
app.use("/carts", cartsRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(5000, () => {
    console.log("connected, to the port: 5000")
})
