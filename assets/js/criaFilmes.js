const filmes = document.querySelector("[data-filmes]");

function criaFilmes (foto, titulo, ano, nota, descricao) {
    const filme = document.createElement('div');
    filme.classList.add('filme');
    filme.innerHTML = 
    `
        <div class="infos">
            <div class="poster">
                <img src="${foto}">
            </div>

            <div class="titulo__filme">

                <h2>
                    ${titulo} (${ano})</h2>

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


const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 10,
      year: 2022,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: true,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.2,
      year: 2019,
      description: "Descrição do filme…",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.2,
      year: 2022,
      description: "Descrição do filme…",
      isFavorited: false
    },
  ]


movies.forEach(elemento => filmes.appendChild(
    criaFilmes(elemento.image, elemento.title, elemento.year, elemento.rating, elemento.description)
))
      
