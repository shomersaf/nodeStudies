
import express from "express"
// import products from "../products/data"
import zod, { any } from "zod"
import carts from "./carts"
import fs from "fs"
const router = express.Router();

const product =zod.object({
  
        title: zod.string().max(20),
        cid: zod.number(),
    })



//generating new cart on POST: http://localhost:5000/carts/cart

router.post("/cart", function (req, res, next) {
    try{
    let cartId =Math.floor(Math.random() * 1000)
    let newCart =  { id:cartId , products:[] }
    carts.push(newCart) 

    return res.send(`Cart with id ${cartId} is added!`)  
    }catch(error){
        const { errors } = error
        console.log(errors[0].path[0] + "=> " + errors[0].message)
        res.status(400).json({ error: errors[0].path[0] + "=> " + errors[0].message })
    }
})
 
//adding a new product to cart { productId:1, cartId:2 } on POST: http://localhost:5000/carts/product

router.post("/product", function (req, res, next) {
  try {
    product.parse(req.body);
    const prId = Math.floor(Math.random() * 1000);
    const { cid, title } = req.body;
    carts.forEach((cart) => {
      if (cart.id === +req.body.cid) {
        cart.products.push({pid: prId, title:req.body.title});
        res.send(
          `Product ${req.body.title} with id ${prId} is added to the cart N ${req.body.cid}!`
        );
      } 
    //   else {
    //     res.json(`no cart with such id`);
    //   }
    });
    return;
  } catch (error) {
    const { errors } = error;
    console.log(errors[0].path[0] + "=> " + errors[0].message);
    res
      .status(400)
      .json({ error: errors[0].path[0] + "=> " + errors[0].message });
  }
});



//getting all carts { productId:1, cardId:2 } on GET: http://localhost:5000/carts/all

router.get("/all", function (req, res, next) {
    return res.json(carts)
})

//getting cart on GET: http://localhost:5000/carts/cart/:id

router.get("/cart/:id", function (req, res, next) {
    const currenCart = carts.find(cart=>cart.id === +req.params.id)

    return res.send(`FOUND:  ${currenCart.id}  ${JSON.stringify(currenCart.products)} `)
})






export default router;