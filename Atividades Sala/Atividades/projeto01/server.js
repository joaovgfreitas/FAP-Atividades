const express = require("express")
const connection = require("./database")
const AppError = require("./AppError")
const Route = require('./Routes')
require('express-async-errors')
const app = express()
app.use(express.json())
app.use(Route)

app.use((error, req, res, next)=>{
  if(error instanceof AppError){
    return res.status(erro.statusCode).json({
      status:'error',
      message:error.message
    })
  }
  return res.status(500).json({
    status:'error',
    message: 'Internal Servidor Error'
  })
})

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conectado ao banco de dados MySQL');
    }
  });

app.listen(3000,()=>{
    console.log("Servidor rodando...")
})