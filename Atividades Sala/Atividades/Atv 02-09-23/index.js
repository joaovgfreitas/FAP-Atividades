const express = require("express")
const app = express()
const PORT = 3001

app.listen(PORT, ()=>{
    console.log("Servidor Rodando!")
})

app.get("/Cadastrar/:id",(req,res)=>{
    const id = req.params.id
    res.send(`BEM VINDO USUÁRIO ${id}`)
})