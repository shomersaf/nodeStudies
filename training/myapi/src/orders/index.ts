
import express, { Request, Response, NextFunction } from "express"
import { pool } from "../database";

const ordersRouter = express.Router();

ordersRouter.get("/",getOrders)
async function getOrders(req:Request,res:Response,next:NextFunction){
try{
    const query = `SELECT 
    CONCAT(LastName, ' ', FirstName) AS employee,
    northwind.orderdetails.OrderID,
    northwind.customers.CustomerName,
    OrderDate,
    GROUP_CONCAT(ProductName) AS products,
    COUNT(northwind.orderdetails.ProductID) AS quantity,
    SUM(northwind.products.Price * northwind.orderdetails.Quantity) AS total
FROM
    northwind.employees
        JOIN
    northwind.orders ON northwind.employees.EmployeeID = northwind.orders.EmployeeID
        JOIN
    northwind.orderdetails ON northwind.orders.OrderID = northwind.orderdetails.OrderID
        JOIN
    northwind.products ON northwind.orderdetails.ProductID = northwind.products.ProductID
        JOIN
    northwind.customers ON northwind.orders.CustomerID = northwind.customers.CustomerID
GROUP BY northwind.orderdetails.OrderID
ORDER BY OrderDate;`
 const result = await pool.execute(query)
 const [data] = result;
 console.log(result)
 res.json(data)

}catch(error){
    return next(error)
}
}
export { ordersRouter };