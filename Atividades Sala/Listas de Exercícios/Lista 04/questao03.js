function inverte(n){
    return n.split('').reverse().join("")
}
let n = String(prompt("Digite um número: "))
console.log(inverte(n))