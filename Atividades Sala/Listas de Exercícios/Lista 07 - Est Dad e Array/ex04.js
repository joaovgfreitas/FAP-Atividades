const estudantes = [
    {nome: "Jose", nota: 5.7},
    {nome: "Maria", nota: 4.8},
    {nome: "Paula", nota: 7.5},
    {nome: "Eustáquio", nota: 6.7},
]
const media = estudantes.reduce((acumulador, notas) => {
    return acumulador = acumulador + notas.nota;
},0)
console.log((media/4).toFixed(2))