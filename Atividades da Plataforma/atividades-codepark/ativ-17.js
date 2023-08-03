/* Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações
alterando uma cor e uma idade. Ao terminar, imprima novamente todas as
informações das três listas. */

let nome = ["João", "Felipe", "Pedro", "Luca", "Igor"]
let idade = [22, 20, 18, 16, 14]
let cores = ["Azul", "Vermelho", "Preto", "Laranja", "Verde"]
console.log(nome)
console.log(idade)
console.log(cores)
idade.pop()
cores.pop()
idade.push(15)
cores.push("Amarelo")
console.log("\nDepois de Alterar: ")
console.log(nome)
console.log(idade)
console.log(cores)