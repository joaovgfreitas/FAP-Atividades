class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    salario(){
        return 2000;
    }
}
let p1 = new Pessoa("Joao", 22);
console.log(p1, "R$",p1.salario());

class Aluno extends Pessoa{
    constructor(nome, idade, nota){
        super(nome, idade, nota)
        this.nota = nota;
    }
    salario(){
        return super.salario()
    }
}
let a1 = new Aluno ("Pedro", 20, 8.5)
console.log(a1,"R$",a1.salario())