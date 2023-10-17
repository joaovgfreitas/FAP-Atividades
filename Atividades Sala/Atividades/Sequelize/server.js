const express = require('express')
const routes = require('./routes')
const app = express()
const database = require('./db')
const bodyParser = require('body-parser')
const User = require('usermodel')

app.use(bodyParser.urlencoded({extended:true}))
app.use(routes)
database.sync()

app.listen(3001, ()=>{
    console.log("Servidor Rodando!")
})