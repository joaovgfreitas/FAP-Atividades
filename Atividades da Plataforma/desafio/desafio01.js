/*A tabela apresenta as três notas de três alunos. Vamos representá-la em uma matriz e calcular a média final de cada aluno e a média de cada nota?*/

let matriz = [
/*José*/ [5.5, 7.9, 7.1],
/*Lúcia*/[7, 3.5, 9.0],
/*Pedro*/[8.6, 7.3, 8.8],
];
let mj = 0, ml = 0, mp = 0, i;
for (i=0; i<matriz.length; i++){
    mj = mj + matriz[0][i]
    ml = ml + matriz[1][i]
    mp = mp + matriz[2][i]
}
mj = (mj/3)
ml = (ml/3)
mp = (mp/3)
console.log("Média dos Alunos")
console.log("Média de José:",mj.toFixed(2));
console.log("Média de Lúcia:",ml.toFixed(2));
console.log("Média de Pedro:",mp.toFixed(2));

let mn1 = 0, mn2 = 0, mn3 = 0;
for (i=0; i<matriz.length; i++){
    mn1 = mn1 + matriz[i][0]
    mn2 = mn2 + matriz[i][1]
    mn3 = mn3 + matriz[i][2]
}
mn1 = (mn1/3)
mn2 = (mn2/3)
mn3 = (mn3/3)
console.log("\nMédia de Notas")
console.log("Média da nota 1:",mn1.toFixed(2))
console.log("Média da nota 2:",mn2.toFixed(2))
console.log("Média da nota 3:",mn3.toFixed(2))