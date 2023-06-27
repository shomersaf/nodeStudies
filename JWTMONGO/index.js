import express from 'express'
import mongoose from "mongoose"
import router from "./authRouter.js"

const app = express()
app.use(express.json())
app.use("/auth", router)
const PORT = process.env.PORT || 5000
const start = async () => {
    try{

      await mongoose.connect("mongodb+srv://shomersaf:UeCAKJWZYVk09V58@test.y44qfzd.mongodb.net/?retryWrites=true&w=majority")
      app.listen(PORT, ()=>{ console.log(`server started at http://localhost:${PORT}`)})
    } catch(e){
        console.log(e)
    }
}
start()
