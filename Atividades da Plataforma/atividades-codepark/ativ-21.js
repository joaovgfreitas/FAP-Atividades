/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.
Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array.*/
//É preciso usar buscar linear pois os elementos do vetor não estão ordenados.
function buscaLinear(array, elementoBuscado){
    for(let i = 0; i < array.length; i++){
        if (array[i] === elementoBuscado){
            return i;
        }
    }
    return -1;
}
let vetor = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const elementoProcurado = 20;
const indiceEncontrado = buscaLinear(vetor, elementoProcurado);
if (indiceEncontrado !== -1){
    console.log("O elemento",elementoProcurado,"foi encontrado")
}else {
    console.log("O elemento",elementoProcurado,"NÃO foi encontrado");
}