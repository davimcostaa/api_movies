import { conectaApi } from "./conectaApi.js";
import mostraFilmes from "./criaFilmes.js";

const pesquisaFilme = document.querySelector('[data-pesquisa]')
const btnPesquisa = document.querySelector('[data-botao-pesquisa]')
const check = document.querySelector('[data-check]')

async function buscarFilme(evento) {
    evento.preventDefault()

    const filmes = document.querySelector("[data-filmes]");
    const filmePesquisa = pesquisaFilme.value    
    const busca = await conectaApi.buscaFilme(filmePesquisa);
    const listaFilmes = busca['results']

    console.log(listaFilmes)
    if (listaFilmes.length == 0) {
        filmes.innerHTML = `
        <div class="erro"> 
            <h2> Busca inválida! Tente novamente. </h2>   
            <img src="https://66.media.tumblr.com/ec470e92c42f73d80fc74116928479fd/tumblr_om0s4fNu4S1qgf1i8o1_540.gif"></img>  
        </div>    
        `

    } else {
        
        while (filmes.firstChild) {
            filmes.innerHTML = ''
        }
    
        listaFilmes.forEach(movie => mostraFilmes(movie))
    }



}  


btnPesquisa.addEventListener('click', (evento) => {
    buscarFilme(evento) 

    check.checked = false
}) 

pesquisaFilme.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        buscarFilme(evento)
    }

    check.checked = false
})
