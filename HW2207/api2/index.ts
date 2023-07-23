
import express, { Request, Response, NextFunction } from "express"
const app = express();
app.use(express.json())
app.get("/health-check", async function (req, res, next) {
    res.send("Hello, api1! I am api2 and I am ok")
})


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(3000, () => {
    console.log("connected, to the port: 3000")
})
