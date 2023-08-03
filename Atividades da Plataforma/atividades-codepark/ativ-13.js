/*Questão :

Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

Resposta:

Código feito em JavaScript */

let n1, n2, n3;
function soma(n1, n2){
    resultado = n1 + n2;
    return resultado
}
function subtracao(n1, n2){
    resultado = n1 - n2;
    return resultado
}
function multiplicacao(n1, n2){
    resultado = n1 * n2;
    return resultado
}
function divisao(n1, n2){
    resultado = n1 / n2;
    return resultado
}
console.log("1 para SOMA")
console.log("2 para SUBTRACAO")
console.log("3 para MULTIPLICACAO")
console.log("4 para DIVISAO")
n3 = Number(prompt("Digite o número da função: "));
n1 = Number(prompt("Digite o 1° número da operação: "))
n2 = Number(prompt("Digite o 2° número da operação: "))
if (n3 == 1){
    soma(n1, n2)
    console.log(resultado)
}else if(n3 == 2){
    subtracao(n1, n2)
    console.log(resultado)
}else if(n3 == 3){
    multiplicacao(n1, n2)
    console.log(resultado)
}else if(n3 == 4){
    divisao(n1, n2)
    console.log(resultado)
}else {
    console.log("Número inserido para a função NÃO VÁLIDO!")
}