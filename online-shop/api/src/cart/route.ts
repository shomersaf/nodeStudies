
import express from "express"
const cartRouter = express.Router();
import uuid4 from "uuid4"
import { logger } from "../logger";


let cartsObjData = {};
// let cartArray = [{ cartId: 124, products: [] }]



cartRouter.post("/", function (req, res, next) {
    logger.info({ message: "Create new Cart with Id" })
    if (!req.body.user) return res.status(400).send("missing user") //zod
    const newCartId = uuid4()
    cartsObjData[newCartId] = { products: [] }
    return res.json({ message: "ok", cartId: newCartId })
})


cartRouter.get("/:cartId", function (req, res, next) {
    const { cartId } = req.params;
    if (cartsObjData[cartId]) {
        return res.json(cartsObjData[cartId])
    } else {
        res.status(404).send("Cart Not Found")
    }
})

cartRouter.put("/:cartId", function (req, res, next) {
    const { productId } = req.body;
    const { cartId } = req.params
    if (cartsObjData[cartId]) {
        cartsObjData[cartId].products.push(productId)
        return res.json({ message: "Product added" })
    } else {
        res.status(404).send("Cart Not Found")
    }
})




export { cartRouter };