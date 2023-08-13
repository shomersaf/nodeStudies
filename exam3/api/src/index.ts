import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import { teamsRouter } from './teams';
import { meetingsRouter } from './meetings';
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


app.use("/teams", teamsRouter)
app.use("/meetings", meetingsRouter)




