const AppError = require('../AppError')
const connection = require('../database')

class userController{
    async create(req,res){
    const {nome,email,senha}  = req.body

    if(!nome){
        throw new AppError("O nome é obrigatório!")
    }

    const sql = 'INSERT INTO users (nome, email, senha) VALUES (?,?,?)'
    const values = [nome,email,senha]

    connection.query(sql,values,(err,results)=>{
        if(err){
            console.error("Erro ao inserir o usuario.")
        } else{
            console.log("Usuario cadastrado com sucesso!")
            res.json({message:"Usuario cadastrado com sucesso!"})
        }
    })
        
    }

    async getUsers(){
        const {nome,email,senha} = req.body

        sql = 'SELECT * FROM users'
        values = [nome,email,senha]

        connection.query(sql,values,(err,results)=>{
            if(err){
                console.error("Erro ao mostrar usuarios")
            }else{
                res.json(results)
            }
        })
    }
}

module.exports = userController