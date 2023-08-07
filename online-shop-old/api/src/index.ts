// const express = require("express")
import express, { Request, Response, NextFunction } from "express"
import { productsRouter, cartRouter, employeesRouter, authRouter, countriesRouter,customersRouter } from "./routes.index" 
import { addRequestId } from "./middleware/addRequestId"
import { addRequestStarted } from "./middleware/addRequestStarted"
import { addRequestFinished } from "./middleware/addRequestFinished"
import { logger } from "./logger"
import { pool } from "./database"
import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())
app.use(addRequestId)
app.use(addRequestStarted)
app.use(addRequestFinished)
app.get("/health-check", function (req, res, next) {
    res.send("api is ok")
})

app.use("/employees", employeesRouter)
app.use("/customers", customersRouter)
app.use("/auth", authRouter)
app.use(verifyAuthentication)
app.use("/products", productsRouter)
app.use("/cart", cartRouter)
app.use("/countries", countriesRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error({ message: err.message })
    res.status(500).send("Something went wrong")
})

app.listen(process.env.PORT, () => {
    logger.info({ message: `Api is running on Port ${process.env.PORT}` })
})

function verifyAuthentication(req: Request, res: Response, next) {
    const { authorization: token } = req.headers
    jsonwebtoken.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            console.log(`${new Date().toISOString()} => requestId: ${res.getHeader("x-request-id")} | User Token invalid ${err.message}`)
            logger.error({ message: err.message })
            return res.status(401).send("Authentication error")
        } else {
            console.log(`${new Date().toISOString()} => requestId: ${res.getHeader("x-request-id")} | User authenticated Successfully`)
            return next()
        }
    });
}
