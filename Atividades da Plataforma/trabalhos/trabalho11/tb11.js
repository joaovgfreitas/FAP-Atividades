const pessoa = [
    {nome: "Joao", idade: 22, profissao: "Estudante", cidade: "Petrolina"},
    {nome: "Felipe", idade: 30, profissao: "Engenheiro", cidade: "Recife"},
    {nome: "Pedro", idade: 25, profissao: "Advogado", cidade: "Juazeiro"},
]
for (const e of pessoa){
    console.log(e)
}
for (const prop in pessoa){
    console.log(`${prop}: ${pessoa[prop]}`)
}