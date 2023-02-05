async function listaFilmesPopulares() {
    const conexao = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=a0ae2a5ee64a841d502694c767aa1476")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}


export const conectaApi = {
    listaFilmesPopulares
}

