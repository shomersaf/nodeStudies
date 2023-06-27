import Router from "express";
import authController from "./authController.js";
import { check } from "express-validator";
import authMiddleware from "./middleware/authMiddleware.js";


const router = new Router();
router.post("/registration",[
    check('username', "User name field can't be empty").notEmpty(),
    check('password', "Password must be from 4 to 10 symbols").isLength({min:4, max:10}),
], authController.registration)
router.post("/login", authController.login)
router.get("/users",authMiddleware, authController.getUsers)
//module.exports  = router
export default router
