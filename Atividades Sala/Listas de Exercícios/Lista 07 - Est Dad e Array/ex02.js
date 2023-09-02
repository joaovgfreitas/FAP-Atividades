let ArrayA = [];
for (let i = 0; i<5; i++){
    x = Number(prompt("Digite um número: "))
    ArrayA.push(x);
}
let soma = 0;
const numImpar = ArrayA.map (elemento => {
    if (elemento % 2 !== 0){
        soma = soma + elemento;
        return soma
    }
})
console.log("A soma dos impares é:",soma)