const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database')

connection.connect((err) =>{
    if(err){
        console.log("Erro ao conectar");
    }else {
        console.log("Conectado com sucesso!")
    }
});

app.listen(3000, ()=>{
    console.log("Servidor Rodando!");
})