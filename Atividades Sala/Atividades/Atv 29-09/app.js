const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const esj = require('ejs')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set(bodyParser.urlencoded({extended:true}))

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '32121008',
    database: 'empresa'
})

db.connect((error)=>{
    if(error){
        console.log("Erro ao conectar com o banco de dados",error)
    }else {
        console.log("Banco de Dados conectado com sucesso")
    }
})

app.get("/formulario",(req, res)=>{
    res.render('formulario')
})

app.post("/cadastrar", (req, res)=>{
    const nome = req.body
    const preco = req.body
    const comando = 'INSERT INTO produto (nome,preco) VALUES(?,?)'
    db.query(comando,[nome,preco],(err)=>{
        if (err){
            console.log("Erro ao inserir o banco de dados",err)
        }else {
            res.send("Produto cadastrado com sucesso!")
        }
    })
})

app.listen(3004, ()=>{
    console.log("Servidor rodando...")
})