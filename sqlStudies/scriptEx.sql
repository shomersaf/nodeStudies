CREATE DATABASE sql_course;
USE sql_course;
CREATE TABLE teacher(id INT AUTO_INCREMENT PRIMARY KEY, surname VARCHAR(255) NOT NULL);
CREATE TABLE lesson(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR (255) NOT NULL, teacher_id INT NOT NULL, FOREIGN KEY (teacher_id) references teacher(id));
INSERT into teacher (surname) value ("Ivanov");
INSERT into teacher (surname) value ("Petrov");
INSERT into teacher (surname) value ("Sidorov");
INSERT into teacher (surname) value ("Petrov");
INSERT into teacher (surname) value ("Chizhkin");
INSERT into teacher (surname) value ("Petrov");
INSERT into teacher (surname) value ("Abdulkanzadoyev");
SELECT * FROM teacher;
SELECT id FROM teacher;
SELECT surname FROM teacher;
SELECT id, surname, surname FROM teacher;
SELECT DISTINCT surname FROM teacher;
SELECT * FROM teacher WHERE id=3;
SELECT * FROM teacher WHERE id>3;
SELECT * FROM teacher WHERE surname="Petrov";
SELECT * FROM teacher WHERE surname="petrov";
SELECT * FROM teacher WHERE surname="petrov" LIMIT 2;
SELECT * FROM teacher LIMIT 2;
SELECT id AS "identifier", surname AS 'familia' FROM teacher; 
SELECT * FROM teacher ORDER BY surname;
SELECT * FROM teacher ORDER BY id DESC;
ALTER TABLE teacher ADD age INT;
SELECT * FROM teacher;
UPDATE teacher SET age=20 WHERE id=1;
UPDATE teacher SET age=30 WHERE id=2;
UPDATE teacher SET age=40 WHERE id=3;
UPDATE teacher SET age=50 WHERE id>3;
SELECT * FROM teacher;
UPDATE teacher SET age=20 WHERE id=1;
UPDATE teacher SET age=25 WHERE id=2;
UPDATE teacher SET age=30 WHERE id=3;
UPDATE teacher SET age=35 WHERE id=4;
UPDATE teacher SET age=40 WHERE id=5;
UPDATE teacher SET age=45 WHERE id=6;
UPDATE teacher SET age=50 WHERE id>7;
SELECT * FROM teacher;
SELECT * FROM teacher WHERE surname LIKE "%rov";
SELECT * FROM teacher WHERE surname LIKE "Pe%";
SELECT * FROM teacher WHERE surname LIKE "%an%";
SELECT * FROM teacher WHERE surname LIKE "P%ov";
SELECT * FROM teacher WHERE id > 2 AND age < 45;
USE sql_course;
SELECT * FROM teacher WHERE id > 2 AND age < 45;
SELECT * FROM teacher WHERE id > 2 OR age < 45;
SELECT * FROM teacher WHERE NOT id=2;
SELECT * FROM sql_course.teacher WHERE NOT id=2;
SELECT * FROM sql_course.teacher WHERE age BETWEEN 20 AND 40;
DELETE FROM sql_course.teacher WHERE surname = 'Ivanov';
INSERT INTO sql_course.lesson (name, teacher_id) VALUES ("maths", 2), ("american maths", 2), (" russian maths", 4), ("geography", 2), ("tne new methodology of UFO archeology", 5);
SELECT sql_course.teacher.surname, sql_course.lesson.name FROM sql_course.teacher INNER JOIN sql_course.lesson ON sql_course.teacher.id = sql_course.lesson.teacher_id;
SELECT sql_course.teacher.surname, sql_course.lesson.name FROM sql_course.teacher LEFT OUTER JOIN sql_course.lesson ON sql_course.teacher.id = sql_course.lesson.teacher_id;
SELECT sql_course.teacher.surname, sql_course.lesson.name FROM sql_course.teacher RIGHT OUTER JOIN sql_course.lesson ON sql_course.teacher.id = sql_course.lesson.teacher_id;
SELECT * FROM sql_course.teacher UNION SELECT * FROM sql_course.lesson;
SELECT * FROM sql_course.lesson UNION SELECT * FROM sql_course.teacher;
SELECT SUM(age) FROM sql_course.teacher;
INSERT INTO sql_course.teacher (surname, age) VALUES ("Pupkin",25),  ("Shishkin",30);
SELECT age, COUNT(age) FROM sql_course.teacher GROUP BY age;
SELECT teacher_id, COUNT(teacher_id) FROM sql_course.lesson GROUP BY teacher_id;
DELETE FROM sql_course.lesson WHERE id IS NULL;
DELETE FROM sql_course.teacher ORDER BY age DESC LIMIT 1;
UPDATE sql_course.teacher SET sql_course.teacher.surname = "Jenkins" WHERE  age = 25;
UPDATE sql_course.teacher SET sql_course.teacher.age = sql_course.teacher.age*2 WHERE  sql_course.teacher.id = 3;
--SUBQUERIES
SELECT 
    *
FROM
    sql_course.teacher
WHERE
    sql_course.teacher.age > (SELECT 
            AVG(sql_course.teacher.age)
        FROM
            sql_course.teacher);
DESCRIBE sql_course.teacher;
ALTER TABLE  sql_course.teacher ADD column gender varchar(255) FIRST;
ALTER TABLE  sql_course.teacher ADD column firstName varchar(255) after surname;
DESCRIBE sql_course.teacher;
ALTER TABLE  sql_course.teacher ADD column phone varchar(255) after age, ADD column adress varchar(255) after phone;
ALTER TABLE sql_course.teacher MODIFY `phone` INT;
ALTER TABLE sql_course.teacher CHANGE `phone` `phoneNumber` INT;
ALTER TABLE sql_course.teacher DROP COLUMN gender;

ALTER TABLE sql_course.teacher ADD index sname (surname);
SHOW INDEX FROM sql_course.teacher;
ALTER TABLE northwind.customers ADD index sCust (CustomerName, City, Country);
SHOW INDEX FROM northwind.customers;
EXPLAIN SELECT age, COUNT(age) FROM sql_course.teacher GROUP BY age;
EXPLAIN SELECT * FROM northwind.customers WHERE Country ='France';
SELECT * FROM northwind.customers WHERE Country ='France';
EXPLAIN SELECT CustomerName FROM northwind.customers WHERE City ='London';
EXPLAIN SELECT CustomerName FROM northwind.customers WHERE Country ='France';
EXPLAIN ANALYZE SELECT CustomerName FROM northwind.customers WHERE Country ='France';

START TRANSACTION;
UPDATE sql_course.teacher
SET sql_course.teacher.age = sql_course.teacher.age+1
WHERE sql_course.teacher.id =2;
UPDATE sql_course.teacher
SET sql_course.teacher.age = sql_course.teacher.age-12
WHERE sql_course.teacher.id =9;
COMMIT;

START TRANSACTION;
UPDATE sql_course.teacher
SET sql_course.teacher.age = sql_course.teacher.age+100
WHERE sql_course.teacher.id =2;
UPDATE sql_course.teacher
SET sql_course.teacher.age = sql_course.teacher.age-1
WHERE sql_course.teacher.id =9;
ROLLBACK;

START TRANSACTION;
UPDATE sql_course.teacher
SET sql_course.teacher.age = sql_course.teacher.age*0.5
WHERE sql_course.teacher.id =2;
SAVEPOINT before_second_part;
UPDATE sql_course.teacher
SET sql_course.teacher.age = sql_course.teacher.age/2
WHERE sql_course.teacher.id =9;
ROLLBACK TO before_second_part;