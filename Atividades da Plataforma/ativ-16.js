/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */
const eleicao = {
    candidato_x: 889,
    candidato_y: 847,
    candidato_z: 515,
    branco: 0,
};
let x = 0, y = 0, z = 0, nulo = 0;
console.log("Digite -1 para encerrar a votação")
let voto = 0;
do{
    voto = prompt("Vote em um candidato: ")
    if (voto==889){
        x++;
        console.log("Voto registrado!")
    }else if (voto==847){
        y++;
        console.log("Voto registrado!")
    }else if (voto==515){
        z++;
        console.log("Voto registrado!")
    }else if (voto==-1){
        console.log("")
    }else {
        nulo++;
        console.log("Voto anulado!")
    }
}
while(voto!=-1)
console.log("Votação encerrada!")
if ((x>y)&&(x>z)){
    console.log("Candidato X venceu a eleição!")
}else if ((y>x)&&(y>z)){
    console.log("Candidato Y venceu a eleição!")
}else if ((z>x)&&(z>y)){
    console.log("Candidato Z venceu a eleição!")
}else {
    console.log("Houve um empate de votos")
}

console.log("Candidato X:",x,"votos");
console.log("Candidato Y:",y,"votos");
console.log("Candidato Z:",z,"votos");
console.log("Brancos e Nulos:",nulo,"votos");