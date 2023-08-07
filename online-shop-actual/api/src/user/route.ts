
import express, { Request, Response, NextFunction } from "express"
import { logger } from "../logger"
import jsonwebtoken from "jsonwebtoken"
import { getUserCart } from "./handlers/getUserCart";
import { createNewCart } from "../cart/handlers/getUserCart";
const userRouter = express.Router();

userRouter.get("/info", getUserInfo)


// no input 
async function getUserInfo(req: Request, res: Response, next: NextFunction) {
    try {
        // instead of doing this:  ( we can overload the userName in the req object)
        // const { authorization: token } = req.headers
        // jsonwebtoken.verify(token, process.env.SECRET, function (err, decoded) {
        //     console.log(decoded)
        // })
        // getUserCart
        // createCart 
        const userId = (req as any).currentUserId
        const userCart = await getUserCart(userId, "open")
        let cartId = userCart?.id
        if (!cartId) {
            cartId = await createNewCart(userId)
            console.log("Cart created", cartId)
        }
        res.json({ cartId })
    } catch (error) {
        logger.error(error.message)
        return next(error)
    }
}


export { userRouter };