class Pessoa {
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    apresentar(){
        console.log("NOME:",this.nome)
        console.log("IDADE:",this.idade)
        console.log("SEXO:",this.sexo);
    }
}
let p1 = new Pessoa("João",22,"Masculino")
p1.apresentar()