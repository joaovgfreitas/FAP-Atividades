const numero1 = document.querySelector("#n1")
const numero2 = document.querySelector("#n2")
const soma = document.querySelector("#resultado")
function somar(){
    let res = Number(numero1.value) + Number(numero2.value)
    soma.innerHTML = res;
}
