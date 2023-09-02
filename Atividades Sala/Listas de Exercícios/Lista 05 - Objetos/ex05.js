var GastoFamiliar = {
    receitas: [1000, 2000, 3000],
    despesas: [1500, 2500],
}
function SomaReceita(){
    var soma = 0; 
    for(let i=0; i<GastoFamiliar.receitas.length; i++){
        soma = soma + GastoFamiliar.receitas[i];
    }
    return soma
}
function SomaDespesa(){
    var soma2 = 0; 
    for(let i=0; i<GastoFamiliar.despesas.length; i++){
        soma2 = soma2 + GastoFamiliar.despesas[i];
    }
    return soma2
}
console.log("Total de receitas:",SomaReceita())
console.log("Total de despesas:",SomaDespesa())