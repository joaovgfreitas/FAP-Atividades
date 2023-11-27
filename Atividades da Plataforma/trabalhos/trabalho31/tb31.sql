CREATE DATABASE BlogDB;
USE BlogDB;

CREATE TABLE Post(
	PostID INT NOT NULL auto_increment,
    Titulo VARCHAR(30),
    Conteudo varchar(50),
    Data_Publicacao Date,
    AutorID INT,
    PRIMARY KEY (PostID),
    foreign key (AutorID) references Autor (AutorID)
);

CREATE TABLE Autor (
	AutorID INT NOT NULL auto_increment,
    nome_autor varchar(30),
    email varchar(50), 
    PRIMARY KEY (AutorID)
);

CREATE TABLE Comentario (
	ComentarioID INT NOT NULL auto_increment,
    TextoComent VARCHAR(100),
    DataComent date,
    AutorID INT,
    PostID INT,
    PRIMARY KEY (ComentarioID),
    FOREIGN KEY (AutorID) references Autor (AutorID),
    FOREIGN KEY (PostID) references Post (PostID)
);