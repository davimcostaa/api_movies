import { conectaApi } from "./conectaApi.js";

const filmes = document.querySelector("[data-filmes]");
export let movies = JSON.parse(localStorage.getItem("favoriteMovies")) || []

export default function mostraFilmes (movie) {
    const checaFavorito = checkMovieIsFavorited(movie.id)
    const lancamento = new Date(movie.release_date)
    const anoLancamento = lancamento.getFullYear()
    console.log(anoLancamento)
    const filme = document.createElement('div');
    filme.classList.add('filme');
    
    filme.innerHTML = 
    `
        <div class="infos">
            <div class="poster">
                <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
            </div>

            <div class="titulo__filme">

                <h2>${movie.title} (${anoLancamento})</h2>

                <div class="icones">
                    <div class="estrela">
                        <img src="img/star.svg" alt="">
                        <span>${movie.vote_average.toFixed(2)}</span>
                    </div>

                    <div class="coracao"> 
                        <img src="img/Heart.svg" alt="" data-coracao id='coracao'>    
                        <span>Favoritar</span>    
                    </div>
                </div>
            </div>
        </div>

        <div class="sinopse">
            <p class="sinopse__filme" data-paragrafo>${movie.overview}</p>
        </div>
    `
    
    const icon = filme.querySelector("[data-coracao]")
    icon.src = checaFavorito ? 'img/heart-fill.svg' : 'img/Heart.svg'

    const coracao = filme.querySelector('#coracao')
    coracao.addEventListener('click', (e) => favoriteButtonPressed(e, movie))

    filmes.appendChild(filme)

}

function favoriteButtonPressed(event, movie) {
    
    const favoriteState = {
      favorited: 'img/heart-fill.svg',
      notFavorited: 'img/Heart.svg'
    }
    
    if(event.target.src.includes(favoriteState.notFavorited)) {
        //console.log(event.target.parentNode)
      // aqui ele será favoritado
      console.log(movie)
      event.target.src = favoriteState.favorited
      saveToLocalStorage(movie)
      
    } else {
        
      // aqui ele será desfavoritado
      event.target.src = favoriteState.notFavorited
      removeFromLocalStorage(movie.id);
      
    }
  }

  
async function listaFilmes() {
      const listaFilmesPopularesAPI = await conectaApi.listaFilmesPopulares();
      const listaFilmes = listaFilmesPopularesAPI['results']
      listaFilmes.forEach(movie => mostraFilmes(movie))
  }   


function checkMovieIsFavorited(id) {
    return movies.find(movie => movie.id == id)
  }  


function saveToLocalStorage(movie) {
    movies.push(movie)
    const moviesJSON = JSON.stringify(movies)
    localStorage.setItem('favoriteMovies', moviesJSON)
    console.log(movies)
}


function removeFromLocalStorage(id) {
    const findMovie = movies.find(movie => movie.id == id)
    const newMovies = movies.filter(movie => movie.id != findMovie.id)
    movies = newMovies
    localStorage.setItem('favoriteMovies', JSON.stringify(newMovies))
    
}

listaFilmes()





