/*Desenvolva um código, utilizando o Google Blockly (ou JavaScript), que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.
Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

Código feito em JavaScript :  */

let roda, peso, pessoas;
roda = prompt("Digite a quantidade de rodas: ")
if ((roda==2)||(roda==3)){
    console.log("Veículo tipo A")
}else if (roda==4){
    peso = prompt("Digite o peso do veículo: ")
    pessoas = prompt("Digite a quantidade de pessoas para o veículo: ")
    if ((peso<=3500)&&(pessoas<=8)){
        console.log("Veículo tipo B")
    }else if ((peso>3500)&&(peso<6000)){
        console.log("Veículo tipo C")
    }else if(peso>6000){
        console.log("Veículo tipo E")
    }else if (pessoas>8){
        console.log("Veículo tipo D")
    }
}else {
    console.log("Veículo não informado")
}
