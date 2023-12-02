const connection = require('../database')

class userController {
    async create(req, res){
        const {nome, email, senha} = req.body
        const sql = 'INSERT INTO Users (nome, email, senha) VALUES (?, ?, ?)'
        const values = [nome, email, senha]
    }
}

module.exports = userController;