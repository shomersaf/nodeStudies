
import express from "express"
import products from "./data"
import zod from "zod"
import { tokens } from "../auth/route";

// import { tokens } from "../auth/route";
const router = express.Router();
// tokens
const productBody = zod.object({
    id: zod.number(),
    title: zod.string().max(20).optional(),
    images: zod.array(zod.string()),
    rating: zod.number().max(5),
    category: zod.enum(["dairy", "drinks", "food", "fruits",])
})

function tokenMiddleware(req, res, next) {
    try {
        console.log(req.body.token)
      const currentToken = tokens.find(item => item === +req.params.token)
      currentToken? next() : res.send("wrong token")
    } catch (error) {
        return res.status(400).send("whaaat?????")
    }
}

router.get("/:token", tokenMiddleware, function (req, res, next) {
    return res.json(products)
})


router.get("/:id/:token", tokenMiddleware, function (req, res, next) {
    const currentProduct = products.find(product => product.id === +req.params.id)
    currentProduct? res.json(currentProduct) :  res.send("not found")
    
})




router.post("/new/:token", tokenMiddleware, function (req, res, next) {

    try {
        productBody.parse(req.body)

        const { id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images } = req.body;
        products.push({
            id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images
        })
        return res.json({ message: "Product Added!" })
    } catch (error) {
        const { errors } = error
        console.log(errors[0].path[0] + "=> " + errors[0].message)
        res.status(400).json({ error: errors[0].path[0] + "=> " + errors[0].message })
    }



})



router.put("/:pid/:token", tokenMiddleware, function (req, res, next) {
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

export default router;