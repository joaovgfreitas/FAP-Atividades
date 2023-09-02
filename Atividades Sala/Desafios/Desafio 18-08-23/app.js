const numero = 50
const numero1 = document.querySelector("#n1")
let cont = document.querySelector("#tent")
cont = 0;
function acerteNum(){
    cont++;
    if (numero1.value>numero){
        window.alert("Número Maior")
        window.alert("Tentativa:",cont)
    }else if (numero1.value<numero){
        window.alert("Número Menor")
        window.alert("Tentativa:",cont)
    }else if (numero1.value == numero){
        window.alert("Acertou!")
        window.alert("Tentativa:",cont)
    }else {
        window.alert("Não é um número")
        window.alert("Tentativa:",cont)
    }
}