let p1 = prompt("É terrestre? ")
if (p1 == "sim"){
    let p2 = prompt("Cabe apenas uma pessoa? ")
    if (p2 == "sim"){
        let p3 = prompt("É pesado? ")
        if (p3 == "sim"){
            console.log("Seu veículo é o TRATOR")
        }else {
            let p4 = prompt("Tem pedal? ")
            if (p4 == "sim"){
                console.log("Seu veículo é a BICICLETA")
            }else{
                console.log("Seu veículo é a MOTO")
            }
        }
    }else{
        console.log("Veículo não informado pela questão")
    }
}else{
    console.log("Veículo não informado pela questão")
}
