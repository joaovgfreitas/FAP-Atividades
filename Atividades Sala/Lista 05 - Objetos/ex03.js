var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
    precoAntigo:function(){
        console.log("Preço Antigo: ",carro.preco)
    }
}
carro.precoAntigo()
carro.preco = 3000
console.log("Novo preço: ",carro.preco)