--write a query that return the most expensive product (1);

SELECT Price, ProductName
FROM northwind.products ORDER BY Price DESC LIMIT 1;

--write a query that return the most expensive order (1);

SELECT orderID, SUM(Income) as total FROM
(SELECT 
   orderID, (Price * Quantity) AS Income
FROM
    northwind.orderdetails
        JOIN
    northwind.products ON northwind.orderdetails.ProductID = northwind.products.ProductID
ORDER BY orderID) as a GROUP BY orderID ORDER BY total DESC LIMIT 1;

--create a report that shows the highest amount of orders price ( order by - top 10);

SELECT 
    CONCAT(LastName, ' ', FirstName) AS employee,
    northwind.orderdetails.OrderID,
    northwind.customers.CustomerName AS customer,
    OrderDate,
    GROUP_CONCAT(ProductName) AS 'ordered products',
    COUNT(northwind.orderdetails.ProductID) AS 'products quantity',
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
ORDER BY total DESC
LIMIT 10;


--which country supply the highest amount of products;

SELECT 
    country, products, orders, total
FROM
    (SELECT 
        northwind.suppliers.country AS country,
            GROUP_CONCAT(DISTINCT northwind.products.ProductName
                ORDER BY northwind.products.ProductName ASC) as products,
            GROUP_CONCAT(northwind.orderdetails.OrderID) AS orders,
            SUM(northwind.products.Price * northwind.orderdetails.Quantity) AS total
    FROM
        northwind.suppliers
    JOIN northwind.products ON northwind.suppliers.SupplierID = northwind.products.SupplierID
    JOIN northwind.orderdetails ON northwind.products.ProductID = northwind.orderdetails.ProductID
    GROUP BY northwind.suppliers.country
    ORDER BY total DESC) AS a
GROUP BY country ORDER BY total DESC;

--ADDITIONAL: checking up the equility of the last two amounts to insure everything is OK;
--total ordered per employees

SELECT SUM(total) as "total per employees"  FROM (SELECT 
    country, products, orders, total
FROM
    (SELECT 
        northwind.suppliers.country AS country,
            GROUP_CONCAT(DISTINCT northwind.products.ProductName
                ORDER BY northwind.products.ProductName ASC) as products,
            GROUP_CONCAT(northwind.orderdetails.OrderID) AS orders,
            SUM(northwind.products.Price * northwind.orderdetails.Quantity) AS total
    FROM
        northwind.suppliers
    JOIN northwind.products ON northwind.suppliers.SupplierID = northwind.products.SupplierID
    JOIN northwind.orderdetails ON northwind.products.ProductID = northwind.orderdetails.ProductID
    GROUP BY northwind.suppliers.country
    ORDER BY total DESC) AS a
GROUP BY country ORDER BY total DESC) as b;

--total ordered per countries

SELECT SUM(total)  as "total per countries" FROM (SELECT 
    CONCAT(LastName, ' ', FirstName) AS employee,
    northwind.orderdetails.OrderID,
    northwind.customers.CustomerName AS customer,
    OrderDate,
    GROUP_CONCAT(ProductName) AS 'ordered products',
    COUNT(northwind.orderdetails.ProductID) AS 'products quantity',
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
ORDER BY total DESC) as n;
  


