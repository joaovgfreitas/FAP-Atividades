CREATE DATABASE LojaEletro;
USE LojaEletro;

CREATE TABLE Produtos (
	ProdutoID INT NOT NULL auto_increment,
    NomeProduto varchar(30),
    Preco FLOAT,
    Quantidade FLOAT,
    PRIMARY KEY (ProdutoID)
);

INSERT INTO Produtos(NomeProduto, Preco, Quantidade) 
VALUES ('Smartphone', 799.00, 20.0);
INSERT INTO Produtos(NomeProduto, Preco, Quantidade)
VALUES ('Tablet', 349.99, 10);
INSERT INTO Produtos(NomeProduto, Preco, Quantidade)
VALUES ('Fone de Ouvido', 49.99, 50);

UPDATE Produtos SET Quantidade = 25.00 WHERE ProdutoID = 1;
UPDATE Produtos SET Quantidade = Quantidade - 5 WHERE ProdutoID = 2;
UPDATE Produtos SET Quantidade = Quantidade - 10 WHERE ProdutoID = 3;
SELECT * FROM PRODUTOS;
