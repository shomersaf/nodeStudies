
import express from "express"
import jsonwebtoken from "jsonwebtoken"
import zod from "zod"
import dotenv from "dotenv"
import { logger } from "../logger"
dotenv.config()



const authRouter = express.Router();
const users = [{ email: "root@root.com", password: "admin" }];

const signupSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
    phone: zod.string().max(20),
    gender: zod.enum(["male", "female", "them"])
})

const loginSchema = zod.object({
    email: zod.string(),
    password: zod.string(),

})

function middlewareLogin(req, res, next) {
    try {
        loginSchema.parse(req.body)
        return next()
    } catch (error) {
        return res.status(400).send("Error")
    }
}

authRouter.post("/login", middlewareLogin, function (req, res, next) {
    const { email, password } = req.body
    const user = users.find(currentUser => currentUser.password === password && currentUser.email === email)
    if (!user) {
        logger.error({ message: "User is not authorized" })
        return res.status(401).send("User is unauthorized")
    }
    const signedToken = jsonwebtoken.sign({ userName: email, role: "admin" }, process.env.SECRET, { expiresIn: '10s' })
    res.json({ token: signedToken })
})

function middlewareSignIn(req, res, next) {
    try {
        signupSchema.parse(req.body)
        return next()
    } catch (error) {
        return res.status(400).send("Error")
    }
}

authRouter.post("/sign-up", middlewareSignIn, function (req, res, next) {
    const user = users.find(u => u.email === req.body?.email?.toLowerCase())
    if (user) return res.status(409).send("user already exist")
    users.push(req.body)
    return res.json({ message: "user successfully added!" })
})


export { authRouter };