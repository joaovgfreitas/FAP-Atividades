const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./database')
const Route = require('./routes')
const app = express();

app.use(express.json());
app.use(Route)

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