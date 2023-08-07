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
1. Create Route - Employees.
2. fetch and present the employees in table
3. use `Between query` , Bring all the employees that has birthdays between specific ( selected ) dates  - use prime date picker 


# Join query
1. sql query
```sql
SELECT 
    *
FROM
    northwind.orders
        INNER JOIN
    northwind.customers ON northwind.orders.CustomerId = northwind.customers.CustomerId



```

write a query that shows all the orders and their employees names 


2. join between the following tables: customers, shippers and employees based on orders table

```sql
SELECT 
    northwind.orders.OrderID,
    northwind.customers.ContactName as 'Customer Contact Name',
    CONCAT(northwind.employees.FirstName,
            ' ',
            northwind.employees.LastName) AS 'Employee Full Name',
            northwind.shippers.ShipperName as 'Shipper Name'
FROM
    northwind.orders
        INNER JOIN
    northwind.customers ON northwind.orders.CustomerId = northwind.customers.CustomerId
        INNER JOIN
    northwind.employees ON northwind.orders.EmployeeID = northwind.employees.EmployeeID
        INNER JOIN
    northwind.shippers ON northwind.orders.ShipperID = northwind.shippers.ShipperID


```


3. the best customer 

```sql

SELECT 
    northwind.orders.CustomerID,
    customers.ContactName,
    COUNT(*) AS numberOfOrders
FROM
    northwind.orders
        JOIN
    customers ON northwind.orders.CustomerID = customers.CustomerId
GROUP BY CustomerId
ORDER BY numberOfOrders DESC


```


4. employee of the "year" ( the bee )

```sql

SELECT 
    EmployeeFullName,
    SUM(totalPricePerProduct) AS employeeTotalIncome
FROM
    (SELECT 
        northwind.orders.OrderID,
            CONCAT(northwind.employees.FirstName, ' ', northwind.employees.LastName) AS EmployeeFullName,
            northwind.orderdetails.ProductID,
            northwind.products.ProductName,
            northwind.orderdetails.Quantity,
            northwind.products.price,
            (northwind.orderdetails.Quantity * northwind.products.price) AS totalPricePerProduct
    FROM
        northwind.orders
    INNER JOIN northwind.employees ON northwind.orders.EmployeeID = northwind.employees.EmployeeID
    INNER JOIN northwind.orderdetails ON northwind.orders.OrderID = northwind.orderdetails.OrderID
    INNER JOIN northwind.products ON northwind.orderdetails.ProductID = northwind.products.ProductID) AS a
GROUP BY EmployeeFullName
ORDER BY employeeTotalIncome DESC 
	



```


5. the best shipper - with the highest amount of orders
6. the best shipper2 - with the highest profit orders 

7. Union example

```sql

SELECT 
    *
FROM
    (SELECT DISTINCT
        (categoryName)
    FROM
        (SELECT 
        ProductID, ProductName, categoryName, description
    FROM
        northwind.products
    LEFT JOIN northwind.categories ON northwind.products.CategoryID = northwind.categories.CategoryID
    ORDER BY ProductID ASC) AS a) AS d 
UNION SELECT DISTINCT
    (northwind.categories.categoryName)
FROM
    northwind.categories

```


# Homework 
1. write a query that return the most expensive product (1)
2. write a query that return the most expensive order (1)
3. create a report that shows the highest amount of orders price ( order by - top 10)
4. which country supply the highest amount of products 
 

 ### Solution 

 ```sql
 
 SELECT * from northwind.products where price = ( SELECT 
    Price
FROM
    northwind.products
GROUP BY price
ORDER BY Price DESC
LIMIT 1) 


SELECT 
    *
FROM
    northwind.products
WHERE
    price = (SELECT 
            MAX(Price)
        FROM
            northwind.products)
 
 
 ```


# Docker
1. `docker pull mysql`
2. `docker run --name=mysql-on-docker-3306 -p 3306:3306  --env="MYSQL_ROOT_PASSWORD=mypassword" mysql`

# Docker compose 
1. `cd database`
2. run `docker compose up`
3. run your api ( `npm start`)
4. connect your API to the local mysql docker 