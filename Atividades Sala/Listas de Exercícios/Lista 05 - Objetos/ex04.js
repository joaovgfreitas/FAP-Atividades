var cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 10,
    mostrar:function(){
        console.log(cachorro.raca, cachorro.cor,"de", cachorro.idade,"Anos")
    },
    latir(){
        console.log("AU AU")
    }
}
cachorro.mostrar()
cachorro.latir()