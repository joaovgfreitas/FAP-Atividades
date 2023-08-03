let nome, n1, n2, falta, media;
nome = prompt("Digite seu nome: ");
n1 = Number(prompt("Digite sua 1° nota: "))
n2 = Number(prompt("Digite sua 2° nota: "))
falta = (prompt("Digite a quantidade de faltas: "))
media = (n1 + n2)/2
if ((media >=7)&&(falta<=3)){
    console.log("Aluno Aprovado!")
}else {
    console.log("Aluno Reprovado!")
}
