const mTela = document.querySelector('.mensagem')

function APIChuck(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(categories =>{
        mTela.innerHTML = 
        `
        ${categories.value}
        `
    })
    .catch(err => console.log(err))
}

APIChuck()