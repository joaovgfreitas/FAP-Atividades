const express = require("express")
const app = express()
const PORT = 3333
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
   const resposta = req.body
   const {id, modelo, valor, Ano} = resposta
   carros.push(resposta)
   res.send("Cadastrado!")
})

app.delete("/Deletar", (req,res)=>{
    const id = req.body.id
    for(let i = 0; i<carros.length; i++){
        if(carros[i].Id == id){
            carros.splice(i, 1)
        }
    }
    res.send("Deletado!")
})
//app.update - update é o último método...
/*app.put("/Atualizar", (res, req)=>{
    const atmodelo = req.body.modelo

    res.send("Atualizado!")
})*/