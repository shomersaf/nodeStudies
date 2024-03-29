
import express from "express"
import zod from "zod"
const router = express.Router();
const users = [];
export const tokens = []


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

router.post("/login", middlewareLogin, function (req, res, next) {
    const { email, password } = req.body
    const user = users.find(currentUser => currentUser.password === password && currentUser.email === email)
    if (!user) return res.status(401).send("User is unauthorized")
    // const token = Date.now();
    const token = 11;
    tokens.push(token)
    res.json({ token: token.toString() })
})

function middlewareSignIn(req, res, next) {
    try {
        signupSchema.parse(req.body)
        return next()
    } catch (error) {
        return res.status(400).send("Error")
    }
}

router.post("/sign-up", middlewareSignIn, function (req, res, next) {
    const user = users.find(u => u.email === req.body?.email?.toLowerCase())
    if (user) return res.status(409).send("user already exist")
    users.push(req.body)
    return res.json({ message: "user successfully added!" })
})


export default router;