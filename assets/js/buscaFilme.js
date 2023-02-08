import { conectaApi } from "./conectaApi.js";
import mostraFilmes from "./criaFilmes.js";


async function buscarFilme(evento) {
    evento.preventDefault()

    const pesquisaFilme = document.querySelector('[data-pesquisa]').value
    const busca = await conectaApi.buscaFilme(pesquisaFilme);
    const listaFilmes = busca['results']
    
    const filmes = document.querySelector("[data-filmes]");

    while (filmes.firstChild) {
        filmes.innerHTML = ''
    }

    listaFilmes.forEach(movie => mostraFilmes(movie))
}  

const btnPesquisa = document.querySelector('[data-botao-pesquisa]')

btnPesquisa.addEventListener('click', evento => {
    buscarFilme(evento)   
}) 

