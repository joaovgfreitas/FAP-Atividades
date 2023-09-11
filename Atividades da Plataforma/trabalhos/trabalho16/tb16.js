class Pessoa {
    constructor(nome, idade, doc){
        this.nome = nome
        this.idade = idade
        this.doc = doc
    }
    MostrarIdade(){
        return this.idade
    }
    MostrarNome(){
        return this.nome
    }
}
p1 = new Pessoa("Joao",22,23456)
p2 = new Pessoa("Pedro", 20, 12345)

class Funcionario extends Pessoa{
    constructor(nome, idade, doc, cargo, salario){
        super(nome, idade, doc)
        this.cargo = cargo
        this.salario = salario
    }
}
f1 = new Funcionario("Ricardo", 30, 34567, "Engenheiro", 9000)
console.log(f1)