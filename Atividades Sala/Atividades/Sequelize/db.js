const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('projetosequelize', 'root', '32121008',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log("Bando de dados conectado com sucesso!")
}catch (error){
    console.log(error)
}
module.exports = sequelize