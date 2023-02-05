import { conectaApi } from "./conectaApi.js";

const filmes = document.querySelector("[data-filmes]");

function criaFilmes (foto, titulo, nota, descricao) {
    const filme = document.createElement('div');
    filme.classList.add('filme');
    filme.innerHTML = 
    `
        <div class="infos">
            <div class="poster">
                <img src="https://image.tmdb.org/t/p/original/${foto}">
            </div>

            <div class="titulo__filme">

                <h2>${titulo}</h2>

                <div class="icones">
                    <div class="estrela">
                        <img src="img/star.svg" alt="">
                        <span>${nota}</span>
                    </div>

                    <div class="coracao">
                        <img src="img/Heart.svg" alt="">
                        <span>Favoritar</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="sinopse">
            <p class="sinopse__filme">${descricao}</p>
        </div>
    `
        return filme    
}

async function listaFilmes() {
    const listaFilmesPopularesAPI = await conectaApi.listaFilmesPopulares();
    const teste = listaFilmesPopularesAPI['results']
    console.log(teste)
    teste.forEach(elemento => filmes.appendChild(
        criaFilmes(elemento.poster_path, elemento.original_title, elemento.vote_average.toFixed(2), elemento.overview)));    
}      

listaFilmes()
