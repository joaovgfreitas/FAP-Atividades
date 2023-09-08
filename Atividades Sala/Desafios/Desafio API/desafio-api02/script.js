const mTela = document.querySelector('.mensagem')

function APIBlockchain(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(categories =>{
        mTela.innerHTML = 
        `
        R$ ${categories.BRL.last}
        `
    })
    .catch(err => console.log(err))
}

APIBlockchain()