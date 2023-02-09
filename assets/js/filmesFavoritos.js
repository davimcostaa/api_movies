import mostraFilmes from "./criaFilmes.js";
import { conectaApi } from "./conectaApi.js";

const check = document.querySelector('[data-check]');
const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
const filmes = document.querySelector("[data-filmes]");

check.addEventListener('change', function() {
    if(check.checked) {

        while (filmes.firstChild) {
            filmes.innerHTML = ''
        }

         favoriteMovies.forEach(movie => mostraFilmes(movie))

         document.querySelectorAll('[data-coracao]').forEach(item => {
            item.setAttribute('src', 'img/heart-fill.svg')
          })
        
    } else {
        while (filmes.firstChild) {
            filmes.innerHTML = ''
        }

        getAllPopularMovies()
    }
});

async function getAllPopularMovies() {
    const movies = await conectaApi.listaFilmesPopulares()
    const listaFilmes = movies['results']
    listaFilmes.forEach(movie => mostraFilmes(movie))
  }

