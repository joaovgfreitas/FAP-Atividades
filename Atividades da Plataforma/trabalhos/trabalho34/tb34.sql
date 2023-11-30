CREATE DATABASE Trab24;
USE Trab24;

CREATE TABLE Autores(
	AutorID INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(50),
    Nacionalidade VARCHAR(30),
    PRIMARY KEY (AutorID)
);

CREATE TABLE Livros(
	LivrosID INT NOT NULL AUTO_INCREMENT,
    Titulo VARCHAR(50),
    AnoPublicacao DATE,
    AutorID INT,
    PRIMARY KEY(LivrosID),
    FOREIGN KEY(AutorID) REFERENCES Autores(AutorID)
);

INSERT INTO Autores (Nome, Nacionalidade) VALUES ("Pedro", "Portugues");
INSERT INTO Autores (Nome, Nacionalidade) VALUES ("Roberto", "Brasileiro");
INSERT INTO Autores (Nome, Nacionalidade) VALUES ("George", "Ingles");

INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ("Dom Casmurro", 20-02-1900, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ("Bela e Fera", 15-06-1950, 3);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ("Bambi", 11-04-1966, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ("Harry Potter", 27-03-1990, 3);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ("Sitio Pica Pau", 18-08-1999, 1);

SELECT * FROM Autores;
SELECT * FROM Livros;
SELECT Livros.LivrosID, Livros.AnoPublicacao, Autores.Nome 
	as NomeAutor, Autores.Nacionalidade FROM Livros
	INNER JOIN Autores ON Livros.AutorID = Autores.AutorID;
SELECT Autores.AutorID, Autores.Nome, Autores.Nacionalidade, Livros.LivrosID, Livros.AnoPublicacao
	FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;
SELECT Autores.AutorID, Autores.Nome, Autores.Nacionalidade, Livros.LivroID, Livros.AnoPublicacao
	FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID
	WHERE Autores.Nacionalidade = 'Brasileiro';
SELECT Autores.AutorID, Autores.Nome, Autores.Nacionalidade, 
	COUNT(Livros.LivroID) as QuantidadeLivros FROM Autores
	LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
	GROUP BY Autores.AutorID, Autores.Nome, Autores.Nacionalidade;




