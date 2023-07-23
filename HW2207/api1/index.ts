
import express, { Request, Response, NextFunction } from "express"
import axios from "axios"
const app = express();
process.on('uncaughtException', function (err) {
    console.log(err);
  });
  
app.use(express.json())
app.get("/health-check", async function (req, res, next) {
    try {
        const result = await axios.get("http://api2:3000/health-check")
      const greetings = "Here is API 1"
        const { data } = result;
    
        return res.json({greetings:greetings, message:data})
    } catch (error) {
        return next(error)
    }
})


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(5000, () => {
    console.log("connected, to the port: 5000")
})


