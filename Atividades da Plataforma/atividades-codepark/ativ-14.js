/*Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

Código feito em JavaScript: */

let n1, n2, i;
console.log("Digite 1 para SOMA")
console.log("Digite 2 para SUBTRAÇÃO")
console.log("Digite 3 para MULTIPLICAÇÃO")
console.log("Digite 4 para DIVISAO")
console.log("Digite 0 para SAIR")
i = Number(prompt("Digite o número da função: "))
while (i!=0){
    n1 = Number(prompt("Digite o primeiro número: "))
    n2 = Number(prompt("Digite o segundo número: "))
    if (i==1){
        console.log("Resultado: ",n1+n2);
    }else if (i==2){
        console.log("Resultado: ",n1-n2);
    }else if (i==3){
        console.log("Resultado: ",n1*n2);
    }else if (i==4){
        console.log("Resultado: ",n1/n2);
    }else {
        console.log("Essa opção não existe");
    }
    i = Number(prompt("Digite o número da função: "))
}
console.log("Fim do Programa!")