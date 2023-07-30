let n1, n2, m;
n1 = Number(prompt("Digite a 1° nota: "))
n2 = Number(prompt("Digite a 2° nota: "))
m = (n1 + n2)/2
if (m>=7){
    console.log("Aluno aprovado com média "+m);
}else{
    console.log("Aluno reprovado com média "+m)
}
