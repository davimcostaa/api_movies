import mostraFilmes from "./criaFilmes.js";
import { conectaApi } from "./conectaApi.js";
import { movies } from "./criaFilmes.js";

const check = document.querySelector('[data-check]');
const filmes = document.querySelector("[data-filmes]");
const tituloPrincipal = document.querySelector(".titulo__principal")

check.addEventListener('change', function() {
    if(check.checked) {

        while (filmes.firstChild) {
            filmes.innerHTML = ''
        }

        tituloPrincipal.innerText = 'Filmes Favoritos'
         movies.forEach(movie => mostraFilmes(movie))

         
    } else {
        while (filmes.firstChild) {
            filmes.innerHTML = ''
        }

        tituloPrincipal.innerText = 'Filmes Populares'
        pegarFilmesPopulares()
    }
});

async function pegarFilmesPopulares() {
    const favoritemovies = await conectaApi.listaFilmesPopulares()
    const listaFilmes = favoritemovies['results']
    listaFilmes.forEach(movie => mostraFilmes(movie))
  }

