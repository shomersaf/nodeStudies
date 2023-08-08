CREATE DATABASE IF NOT EXISTS sport5;
USE sport5;
CREATE TABLE teams (
    teamId INT AUTO_INCREMENT PRIMARY KEY,
    teamName VARCHAR(50) NULL,
    city VARCHAR(50) NULL,
    mainColor VARCHAR(50) NULL,
    secondaryColor VARCHAR(50) NULL,
    semel VARCHAR(255) NULL);

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teamAId INT NULL,
    teamBid INT NULL,
    teamAScore INT NULL,
    teamBscore INT NULL,
    gameTime DATETIME,
    KEY foreign1_idx (teamAId),
    KEY foreign2_idx (teamBid),
    CONSTRAINT foreign1 FOREIGN KEY (teamAId)
        REFERENCES teams (teamId)
        ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT foreign2 FOREIGN KEY (teamBid)
        REFERENCES teams (teamId)
        ON DELETE CASCADE ON UPDATE NO ACTION
);

