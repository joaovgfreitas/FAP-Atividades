CREATE DATABASE Notas;
USE Notas;

CREATE TABLE Users(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30),
    email VARCHAR(50),
    senha VARCHAR(10),
    avatar VARCHAR(10),
    created_at DATE,
    updated_at DATE,
    PRIMARY KEY (id)
);

CREATE TABLE Notes(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    descricao VARCHAR(50),
    user_id INT,
    created_at DATE,
    updated_at DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Tags(
	id INT NOT NULL AUTO_INCREMENT,
    note_id INT,
    user_id INT,
    nome VARCHAR(30),
    PRIMARY KEY (id),
    FOREIGN KEY (note_id) REFERENCES Notes(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
 );
 
 CREATE TABLE Links (
	id INT NOT NULL AUTO_INCREMENT,
    note_id INT,
    url VARCHAR(50),
    created_at DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (note_id) REFERENCES Notes(id)
 );
 