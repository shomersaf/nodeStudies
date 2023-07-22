## Link to DB:
https://en.wikiversity.org/wiki/Database_Examples/Northwind/MySQL


## MySql installer
https://dev.mysql.com/downloads/installer/



### HW
1. Write a query that return the first 10 customers ( limit ) 
2. Write a query that return all the customers that leave at spain - return the customer name only
3. Bring all the products that includes "an" in thier productName
4. Write a query that return all the suppliers from UK  
5. Return all the products that cost more than 10$ 
6. write a query that return all the products that cost less than 20$
7. write a query that return the number of employees in the company     



### EX1:
1. Create the following table: Cars
2. declare at least 5 columns
3. declare Primary key
4. declare createdAt & updatedAt columns => DATETIME



```sql
SELECT 
    SUM(NumberOfProducts)
FROM
    (SELECT 
        CategoryID, COUNT(*) AS NumberOfProducts
    FROM
        northwind.products
    GROUP BY CategoryID) as a
    
    

SELECT 
    northwind.categories.CategoryID, CategoryName , AVG(Price) AS NumberOfProducts
FROM 
    northwind.products JOIN categories on northwind.categories.CategoryID = northwind.products.CategoryID
GROUP BY CategoryID


SELECT 
    Country, COUNT(*) AS NumberOfSuppliers
FROM
    northwind.suppliers
GROUP BY Country
HAVING NumberOfSuppliers < 4
ORDER BY NumberOfSuppliers ASC

```


### EX2 :
1. Create a report with GROUP BY that shows every shipper id and his number of orders.


# Homework
1. Create e2e feature
- Client side - React component, page, route , on load - making request to the api GET /Products
- Server Side - Nodejs Api, express GET request, return all the products from the database
- DB - query (`select * from products` )


# Homework 9.7
1. Create Route - Employees.+
2. fetch and present the employees in table+
3. use `Between query` , Bring all the employees that has birthdays between specific ( selected ) dates  - use prime date picker 