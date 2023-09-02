const tarantinoMovies = [
    {name: 'Bastardos Inglorios', release: 2009},
    {name: 'Pulp Fiction', release: 1994},
    {name: 'Kill Bill: Volume 2', release: 2004},
    {name: 'Quatro Quartos', release: 1995},
    /*{name: '', release: },
    {name: '', release: },
    {name: '', release: },*/
]
const filmesNovos = tarantinoMovies.filter (filme =>{
    return filme.release < 2000
})
console.log(filmesNovos)