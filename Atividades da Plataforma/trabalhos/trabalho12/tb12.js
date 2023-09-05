class Caneta {
    constructor(cor, tamanho, tampada){
        this.cor = cor
        this.tamanho = tamanho
        this.tampada = tampada
    }
    Status(){
        console.log("Cor:",this.cor)
        console.log("Tamanho:",this.tamanho)
        console.log("Está tampada?",this.tampada)
    }
    Escreva(){
        if (this.tampada == true){
            console.log("Caneta tampada, não dá para escrever")
        }else {
            console.log("Escrevendo...")
        }
    }
    Tampar(){
        this.tampada = true
        console.log("Caneta tampada!")
    }
    Destampar(){
        this.tampada = false
        console.log("Caneta detampada!")
    }
}
console.log("Primeiro Objeto MATERIAL - CANETA:")
let c1 = new Caneta("Azul", 0.5, true)
c1.Status()
c1.Destampar()
c1.Escreva()

class Videogame {
    constructor(nome, marca, anolancamento, ligado){
        this.nome = nome
        this.marca = marca
        this.anolancamento = anolancamento
        this.ligado = ligado
    }
    Status2(){
        console.log("Nome:",this.nome)
        console.log("Marca:",this.marca)
        console.log("Ano de Lançamento:",this.anolancamento)
        console.log("Está ligado?",this.ligado)
    }
    Ligar(){
        this.ligado = true
        console.log("O videogame está ligado!") 
    }
    Desligar(){
        this.ligado = false
        console.log("O videogame está desligado")
    }
    Jogar(){
        if(this.ligado == false){
            console.log("Ligue o videomgame primeiro.")
        }
        else {
            console.log("Jogando...")
        }
    }
}
console.log("")
console.log("Segundo Objeto MATERIAL - VIDEOGAME")
let v1 = new Videogame("Playstation 4", "Sony", 2013, false)
v1.Status2()
v1.Ligar()
v1.Jogar()

class Aula {
    constructor(dia, horario, materia){
        this.dia = dia
        this.horario = horario
        this.materia = materia
    }
    Status3(){
        console.log("Dia:",this.dia)
        console.log("Horario:",this.horario)
        console.log("Matéria:",this.materia)
    }
    Assistir(){
        console.log("Assistindo a aula...")
    }
    Iraula(){
        console.log("Indo para a sala de aula")
    }
    Faltar(){
        console.log("Não poderei ir para a aula")
    }
}
console.log("")
console.log("Terceiro Obejto, ABSTRATO - AULA")
let a1 = new Aula("Segunda", "19h", "Cálculo 2")
a1.Status3()
a1.Iraula()
a1.Assistir()