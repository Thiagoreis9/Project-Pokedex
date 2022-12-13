const pokemonDetail = document.getElementById('pokemonDetail');
const loadDetail = document.getElementById('loadDetail');

function convertPokemonDetail(pokemon) {
    return `<section id="pokemonDetail" class="content ${pokemon.type}">
                <header>
                    <div>
                        <a href="index.html">
                            <img src="assets/imagens/right-arrow.png" alt="backArrow">
                        </a>
                        <span class="name">${pokemon.name}</span>
                    </div>

                    <p>
                        <span class="number">#${pokemon.number}</span>
                    </p>
                </header>

                <div class="pokemonView">

                    <span class="arrow">
                        <a href="index.html">
                            <img src="assets/imagens/voltar.png" alt="back">
                        </a>
                    </span>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">

                    <span class="arrow">
                        <a href="index.html">
                            <img src="assets/imagens/avancar.png" alt="forward">
                        </a>
                    </span>                

                </div>
                <div class="pokeStatus">

                    <ol class="typeColor types">
                    ${pokemon.types.map((type) => 
                        `<li class="${type} type">${type}</li>`).join('')}
                    </ol>

                    <p class="infoTitle">about</p>

                    <div class="pokeAbout">
                        <div class="weight">
                            <div class="aboutInfo">
                                <img src="assets/imagens/weight.png" alt="">
                                <p>${pokemon.weight} kg</p>
                            </div>
                            <p class="p">weight</p>
                        </div>

                        <img src="assets/imagens/frame.png" alt="">

                        <div class="height">
                            <div class="aboutInfo">
                                <img src="assets/imagens/height.png" alt="">
                                <p>${pokemon.height} m</p>
                            </div>
                            <p class="p">height</p>
                        </div>

                        <img src="assets/imagens/frame.png" alt="aboutFrame">

                        <div class="moves">
                            <ol>
                            ${pokemon.abilities.map((ability) => 
                                `<li>${ability}</li>`).join('')}
                            </ol>
                            <p class="pp">moves</p>
                        </div>
                    </div>

                    <p class="infoTitle">Base Stats</p>

                        <div class="stats" ${pokemon.type}>
                            <div class="stats_name">
                                <ol>
                                    <li>HP</li>
                                    <li>ATK</li>
                                    <li>DEF</li>
                                    <li>SATK</li>
                                    <li>SDEF</li>
                                    <li>SPD</li>
                                </ol>
                            </div>

                            <img class="divisor" src="assets/imagens/frame1.png" alt="">

                            <div class="stats_value">
                                <ol>
                                ${pokemon.stats.map((stat) => 
                                    `<li>${stat}</li>`).join('')}
                                    
                                </ol> 
                            </div>

                            <div class="container-barra ">
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                            </div>
                        </div>

                </div>
            </section>`
}

function loadPokemonDetail() {
    pokeApi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonDetail).join('');
        pokemonDetail.innerHTML += newHtml;
    })
}

loadPokemonDetail();

loadDetail.addEventListener('click', () => {
    
    loadPokemonDetail();

})