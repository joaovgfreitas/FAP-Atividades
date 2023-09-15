const express = require("express")
const app = express()
const PORT = 3001
const carros = [
    {
        Id: 1,
        Modelo: "Palio",
        Valor: "35000",
        Ano: 2010
       },
       {
        Id: 2,
        Modelo: "Fiat",
        Valor: "30000",
        Ano: 2005
       },
       {
        Id: 3,
        Modelo: "Gol",
        Valor: "48000",
        Ano: 2020
       }
]
app.use(express.json())
app.listen(PORT, ()=>{
    console.log("Servidor rodando")
})
app.get("/Carros", (req, res)=>{
    res.send(carros)
})

app.post("/Cadastrar",(req, res)=>{
    const id = req.body.id
    const modelo = req.body.modelo
    const valor = req.body.valor
    const ano = req.body.ano
})