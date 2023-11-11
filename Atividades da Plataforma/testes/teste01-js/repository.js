let jogos = [
    {nome: 'Mario World', lancamento: '21 de novembro 1990'},
    {nome: 'Sonic', lancamento: '23 de Junho de 1991' },
    {nome: 'Doom', lancamento: '10 de Dezembro de 1993' }
]

const getJogos = () =>{
    return jogos
}

const getJogosById = (id) =>{
    return jogos[id]
}

const createJogo = (novoJogo) =>{
    jogos.push(novoJogo)
    return jogos
}

const uptadeJogo = (id, jogo) =>{
    jogos[id] = jogo
    return jogos[id]
}

const deleteJogo = (id) =>{
    eleToRemove = jogos[id]
    jogos = jogos.filter(function (elemento) {
        return elemento.nome != eleToRemove.nome && elemento.lancamento != eleToRemove.lancamento;
    })
    return jogos
}

module.exports = {
    getJogos,
    getJogosById,
    createJogo,
    uptadeJogo,
    deleteJogo,
}