const mostrarTela = document.querySelector('.resultado')

function APICorreios(){
    fetch('https://viacep.com.br/ws/56327140/json')
    .then(response => response.json())
    .then(cep =>{
        mostrarTela.innerHTML = 
        `Bairro: ${cep.bairro}
         Endereço: ${cep.logradouro}
         Local: ${cep.localidade}
        `
    })
    .catch(err => console.log(err))
}

APICorreios()