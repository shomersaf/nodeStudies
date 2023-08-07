
import express from "express"
import jsonwebtoken from "jsonwebtoken"
import zod from "zod"
import dotenv from "dotenv"
import { logger } from "../logger"
import signUp from "./handlers/signup"
import { login } from "./handlers/login"
dotenv.config()



const authRouter = express.Router();
const users = [{ email: "root@root.com", password: "admin" }];

export const signupSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
    firstName: zod.string().max(100),
    lastName: zod.string().max(100)
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

authRouter.post("/login", middlewareLogin, async function (req, res, next) {
    const { email, password } = req.body
    // const user = users.find(currentUser => currentUser.password === password && currentUser.email === email)
    // if (!user) {
    //     logger.error({ message: "User is not authorized" })
    //     return res.status(401).send("User is unauthorized")
    // }
    try {
        const { result, userRecord } = await login(email, password);
        console.log(result, userRecord)
        if (!result) throw new Error()
        console.log(userRecord)
        const signedToken = jsonwebtoken.sign({ userName: userRecord.email, id: userRecord.id, role: userRecord.role }, process.env.SECRET, { expiresIn: '60m' })
        res.json({ token: signedToken })
    } catch (error) {
        return res.status(401).send("User is unauthorized")
    }
})

function middlewareSignIn(req, res, next) {
    try {
        signupSchema.parse(req.body)
        return next()
    } catch (error) {
        return res.status(400).send("Error")
    }
}

authRouter.post("/sign-up", middlewareSignIn, async function (req, res, next) {
    try {
        // const user = users.find(u => u.email === req.body?.email?.toLowerCase())
        // if (user) return res.status(409).send("user already exist")
        const result = await signUp(req.body)
        console.log("User added id", result)
        return res.json({ message: "user successfully added!" })
    } catch (error) {
        return next(error)
    }
})


export { authRouter };