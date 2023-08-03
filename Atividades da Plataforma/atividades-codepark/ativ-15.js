/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

Código feito em JavaScript: */

let nome, ano;
nome = prompt("Digite seu nome completo: ");
ano = Number(prompt("Digite seu ano de nascimento: "))
if ((ano>1922)&&(ano<2021)){
    console.log("Olá",nome);
    console.log("Você nasceu em",ano,"e completa",2022-ano,"neste ano de 2022");
}else{
    console.log("Ano inválido!")
}