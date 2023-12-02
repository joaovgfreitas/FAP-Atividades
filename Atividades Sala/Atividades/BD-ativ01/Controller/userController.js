const connection = require('../database')

class userController {
    async create(req, res){
        const {nome, email, senha} = req.body;
        const sql = 'INSERT INTO Users (nome, email, senha) VALUES (?, ?, ?)';
        const values = [nome, email, senha];

        connection.query(sql, values, (err, result)=>{
            if(err){
                console.log("Erro ao inserir o usuário");
            }else {
                console.log("Sucesso ao inserir usuário");
                res.json({message:"usuario cadastrado com sucesso!"})
            }
        })
    }
    async mostrar(req, res){
        const {nome, email, senha} = req.body;
        const sql = 'SELECT (nome, email, senha) FROM Users';
        const values = [nome, email, senha]

        connection.query(sql, values, (err, result)=>{
            if(err){
                console.log("Erro ao selecionar usuarios.")
            }else {
                console.log("Sucesso ao selecionar usuarios")
                res.json({message:"nome: "});
                res.json({message:"email: "})
                res.json({message:"senha: "})
            }
        })
    }

    async getUsers(){
        const {nome, email, senha} = req.body

    }


}

module.exports = userController;