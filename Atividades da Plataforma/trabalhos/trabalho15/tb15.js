class Pessoa {
    nome = ""
    idade = 0
    danome(){
        return this.nome
    }
    daidade(){
        return this.idade
    }
    peganome(novoNome){
        this.nome = novoNome
    } 
    pegaidade(novaidade){
        this.idade = novaidade
    } 
}
p1 = new Pessoa
p1.peganome("Joao")
console.log(p1.danome())