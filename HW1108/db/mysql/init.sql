CREATE DATABASE IF NOT EXISTS carrental;
USE carrental;

CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  car varchar(255) DEFAULT NULL,
  lp varchar(50) DEFAULT NULL,
  color varchar(50) DEFAULT NULL,
  engine int DEFAULT NULL,
  company varchar(50) DEFAULT NULL,
  img varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lp` (`lp`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE rentals (
  rentId int NOT NULL AUTO_INCREMENT,
  carId int DEFAULT NULL,
  fromDate datetime DEFAULT NULL,
  toDate datetime DEFAULT NULL,
  pricePerDay int DEFAULT NULL,
  total int GENERATED ALWAYS AS (((TIMESTAMPDIFF(day,fromDate,toDate)) * pricePerDay)) VIRTUAL,
  PRIMARY KEY (rentId),
  KEY carId_idx (carId),
  CONSTRAINT carId FOREIGN KEY (carId) REFERENCES `cars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;