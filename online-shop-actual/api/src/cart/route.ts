
import express from "express"
const cartRouter = express.Router();
import uuid4 from "uuid4"
import { logger } from "../logger";
import { addProductToCart } from "./handlers/addProductToCart";


let cartsObjData = {};
// let cartArray = [{ cartId: 124, products: [] }]

cartRouter.post("/add-product", async function (req, res, next) {
    console.log(req.body)
    const { productPrice, quantity, productId, cartId } = req.body
    // validate cartId is correct 
    const result = await addProductToCart(productId, cartId, productPrice, quantity)
    // logger.info({ message: "Create new Cart with Id" })
    // if (!req.body.user) return res.status(400).send("missing user") //zod
    // const newCartId = uuid4()
    // cartsObjData[newCartId] = { products: [] }
    return res.json({ message: "ok" })
})




cartRouter.get("/:cartId", function (req, res, next) {
    const { cartId } = req.params;
    if (cartsObjData[cartId]) {
        return res.json(cartsObjData[cartId])
    } else {
        res.status(404).send("Cart Not Found")
    }
})






export { cartRouter };