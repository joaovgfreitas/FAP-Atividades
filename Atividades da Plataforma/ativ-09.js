let nome = prompt("Digite o nome: ")
let idade = Number(prompt("Digite a idade: "))
let altura = Number(prompt("Digite a altura: "))
let maior_de_idade = new Boolean(true)
if (idade>=18){
    maior_de_idade = true
}else{
    maior_de_idade = false
}
console.log("NOME: "+nome)
console.log("IDADE: "+idade)
console.log("ALTURA: "+altura)
console.log("MAIOR DE IDADE: "+maior_de_idade)
