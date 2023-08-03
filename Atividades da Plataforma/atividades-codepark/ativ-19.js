let vetor = [3, 7, 9, 1, 0]
function estaVazia(){
    return vetor.length === 0;
}
function enfileirar (element){
    vetor.push(element);
}
function desenfileirar(){
    if (estaVazia()){
        return null;
    }
    return vetor.shift()
}
console.log(vetor)
desenfileirar()
console.log(vetor)
desenfileirar()
console.log(vetor)
desenfileirar()
console.log(vetor)
desenfileirar()
console.log(vetor)
desenfileirar()
console.log(vetor) 