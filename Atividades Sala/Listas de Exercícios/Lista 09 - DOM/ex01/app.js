let vetor = ["Joao", "Pedro", "Fabio", "Lucas", "Leo"]
const nome1 = document.querySelector("#nomepes")
const res = document.querySelector("#resultado")
function pesquise(){
    const nome = nome1.value
    if (vetor.includes(nome)){
        res.innerHTML = `<h1>${nome}</h1>`
    }else {
        res.textContent = `${nome} não encontrado`
    }
}