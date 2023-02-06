import { conectaApi } from "./conectaApi.js";
import mostraFilmes from "./criaFilmes.js";

async function buscarFilme(evento) {
    evento.preventDefault()

    const pesquisaFilme = document.querySelector('[data-pesquisa]').value
    const busca = await conectaApi.buscaFilme(pesquisaFilme);
    const listaFilmes = busca['results']
    
    const filmes = document.querySelector("[data-filmes]");

    while (filmes.firstChild) {
        filmes.removeChild(filmes.firstChild)
    }

    listaFilmes.forEach(elemento => filmes.appendChild(
        mostraFilmes(elemento.poster_path, elemento.original_title, elemento.vote_average.toFixed(2), elemento.overview)));    

}    

const btnPesquisa = document.querySelector('[data-botao-pesquisa]')

btnPesquisa.addEventListener('click', evento => {
    buscarFilme(evento)
    
}) 