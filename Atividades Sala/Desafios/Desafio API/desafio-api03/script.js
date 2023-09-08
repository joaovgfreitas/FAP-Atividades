const mTela = document.querySelector('.mensagem')

function APIGitHub(){
    fetch('https://api.github.com/users/origamid/followers')
    .then(response => response.json())
    .then(categories =>{
        mTela.innerHTML = 
        `
        ID: ${categories.id}
        Nome: ${categories.login}
        
        `
    })
    .catch(err => console.log(err))
}

APIGitHub()