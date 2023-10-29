const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

const menu = [
  { id: 1, nome: 'Hamburguer', preco: 10.99 },
  { id: 2, nome: 'Pizza', preco: 12.99 },
  {id:3, nome:'Batata frita', preco:25.00},
  // Adicione outros pratos ao menu
];

app.get('/menu', (req, res) => {
  res.json(menu);
});

app.post('/menu/cardapio',(req,res)=>{
    const {id, nome, preco} = req.body

    const comida ={
        id,
        nome,
        preco
    }

    menu.push(comida)
    res.status(201).json({message: 'Produto inserido com sucesso'})
})

app.listen(port, () => {
  console.log(`API do restaurante rodando na porta ${port}`);
});
