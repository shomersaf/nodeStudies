-- Write a query that returns the first 10 customers ( limit )
-- Write a query that returns all the customers that live in Spain - return the customer name only
-- Bring all the products that include "an" in their productName
-- Return all the products that cost more than 10$
-- write a query that returns all the products that cost less than 20$
-- write a query that returns the number of employees in the company
USE northwind;
SELECT * FROM customers LIMIT 10;
-- another option
SELECT * FROM customers WHERE Customerid<11;
SELECT ContactName FROM customers WHERE Country = 'Spain';
SELECT * FROM products WHERE ProductName LIKE '%an%';
SELECT * FROM products WHERE Price>10;
SELECT * FROM products WHERE Price<20;
SELECT COUNT(*) FROM employees;
