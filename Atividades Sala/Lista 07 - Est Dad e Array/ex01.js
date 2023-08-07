/* Desenvolver um programa que efetue a leitura de dez elementos de uma array A.
Construir uma array B do mesmo tipo, observando a seguinte lei de formação: se o valor
do índice for par, o valor deverá ser multiplicado por 5. Sendo ímpar, deverá ser somado
com 5. Ao final mostrar o conteúdo do array B.*/
let i, x;
let ArrayA = [], ArrayB = [];
for (i = 0; i<5; i++){
    x = Number(prompt("Digite um número: "));
    ArrayA.push(x)
    ArrayB.push(x)
}
const numpar = ArrayA.map(elemento => {
    return elemento % 2 == 0? elemento * 5: elemento + 5;
})
console.log(numpar);