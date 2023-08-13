CREATE DATABASE IF NOT EXISTS exam;
USE exam;
  CREATE TABLE teams (
  id int NOT NULL AUTO_INCREMENT,
  teamName varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `teamName` (`teamName`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE meetings (
  meetupId int NOT NULL AUTO_INCREMENT,
  teamId int DEFAULT NULL,
  fromDate datetime DEFAULT NULL,
  toDate datetime DEFAULT NULL,
  topic varchar(255) DEFAULT NULL,
  room int DEFAULT NULL,
  PRIMARY KEY (meetupId),
  KEY teamId_idx (teamId),
  CONSTRAINT teamId FOREIGN KEY (teamId) REFERENCES `teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;