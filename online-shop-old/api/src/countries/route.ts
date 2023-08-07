
import express from "express"
import axios from "axios"
const countriesRouter = express.Router();
countriesRouter.get("/", async function (req, res, next) {
    try {
        const result = await axios.get("https://restcountries.com/v3.1/all")
        const { data } = result;
        return res.json(data)
    } catch (error) {
        return next(error)
    }
})
export { countriesRouter };