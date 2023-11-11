const express = require('express')
const repository = require ('./repository')

const app = express()
const port = 3000

app.get('/pessoas', (req, res)=>{
    res.send(repository.getJogos())
})

app.post('/jogos', (req, res)=>{
    res.send(repository.createJogo(req.body))
})

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`Exemplo de app executanco a porta ${port}`)
})