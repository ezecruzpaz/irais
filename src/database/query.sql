CREATE DATABASE Prueba01;

USE Prueba01;



SELECT * FROM personas;



CREATE TABLE personas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL
);
