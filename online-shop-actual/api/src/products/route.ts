
import express from "express"
import products from "./data"
import zod from "zod"
import { getAllProducts } from "./handlers/getProducts";
import { addProduct } from "./handlers/addProduct";
// import { tokens } from "../auth/route";
const productsRouter = express.Router();
// tokens
const productBody = zod.object({
    productName: zod.string().max(100),
    price: zod.number(),
    category: zod.number(),
})

productsRouter.get("/", async function (req, res, next) {
    try {
        const result = await getAllProducts()
        return res.json(result)
    } catch (error) {
        return next(error)
    }
})


productsRouter.get("/:id", function (req, res, next) {
    return res.json(products) // filter by id
})
// POST product/new 
productsRouter.post("/new", verifyAdmin, async function (req, res, next) {
    try {

        productBody.parse(req.body)
        const { productName, categoryId, price } = req.body;
        const result = await addProduct({ productName, categoryId, price })
        return res.json({ message: "Product Added!" })
    } catch (error) {
        const { errors } = error
        console.log(errors[0].path[0] + "=> " + errors[0].message)
        res.status(400).json({ error: errors[0].path[0] + "=> " + errors[0].message })
    }
})

function verifyAdmin(req, res, next) {
    try {
        const role = (req as any).currentUserRole;
        console.log(role, "role $$$$$$$$$$$$$$$$$$$$$$$$$")
        if (role === "admin") return next();
        throw new Error()
    } catch (error) {
        return res.status(403).send()
    }
}

productsRouter.put("/:pid", function (req, res, next) {
    try {
        productBody.parse(req.body)
        const currentIndex = products.findIndex(cid => cid.id === +req.params.pid)
        if (currentIndex === -1) return res.status(404).send("not found")
        products[currentIndex] = { ...products[currentIndex], ...req.body }
        return res.json({ messagE: "product changed", newP: products[currentIndex] })
    } catch (error) {
        const { errors } = error
        console.log(errors[0].path[0] + "=> " + errors[0].message)
        res.status(400).json({ error: errors[0].path[0] + "=> " + errors[0].message })
    }

})

export { productsRouter };