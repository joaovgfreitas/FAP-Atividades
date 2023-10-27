const express = require('express')
const app = express()
const PORT = 3002
let vet = []

app.get("/Cardapio",(req, res)=>{
    res.render('Cardapio')
})

app.listen(PORT, ()=>{
    console.log("Servidor Rodando...")
})
