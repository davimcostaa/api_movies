async function listaFilmesPopulares() {
    const conexao = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=a0ae2a5ee64a841d502694c767aa1476&language=pt-BR")
    const conexaoConvertida = await conexao.json()
    console.log(conexaoConvertida)
    return conexaoConvertida
}

async function buscaFilme(termoDeBusca) {
    const conexao = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a0ae2a5ee64a841d502694c767aa1476&language=pt-BR&query=${termoDeBusca}&page=1&include_adult=false`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida
}

export const conectaApi = {
    listaFilmesPopulares,
    buscaFilme
}

