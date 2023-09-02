const empresas = [
    {nome: 'Samsung', valordeMercado: 50, CEO: 'Kim Hyun Suk', anodeCriacao: 1938},
    {nome: 'Microsoft', valordeMercado: 415, CEO: 'Satya Nadella', anodeCriacao: 1975},
    {nome: 'Intel', valordeMercado: 117, CEO: 'Brian Krzanich', anodeCriacao: 1968},
    {nome: 'Facebook', valordeMercado: 383, CEO: 'Mark Zuckerberg', anodeCriacao: 2004},
    {nome: 'Spotify', valordeMercado: 30, CEO: 'Daniel Ek', anodeCriacao: 2006},
    {nome: 'Apple', valordeMercado: 845, CEO: 'Tim Cook', anodeCriacao: 1976},
]
const EmpNovas = empresas.filter (emp => {
    return emp.anodeCriacao > 2000
})
//console.log(EmpNovas)
/*empresas.forEach(emp => {
    console.log("Nome da Empresa:",emp.nome," Seu CEO:",emp.CEO)
}) */
/*let total = 0;
empresas.forEach(emp => {
    total = total + emp.valordeMercado
})
console.log("O valor de mercado somado de todas as empresas é de:",total)*/
let acumulador = 0;
const ValorTot = empresas.reduce((acumulador, emp) =>{
    return acumulador = acumulador + emp.valordeMercado
},acumulador)
console.log("O valor de mercado somado de todas as empresas é de:",ValorTot)