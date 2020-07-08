 -- Drop database if exists
DROP DATABASE IF EXISTS burger_db;

-- Create database
CREATE DATABASE burger_db;

-- Ensure code that follows uses correct database
USE burger_db;

-- Create the table for database burgers
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger VARCHAR(100),
    devoured BOOLEAN
);