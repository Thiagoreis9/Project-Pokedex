function convertPokemonTypesToHTML(pokemonTypes){

    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}

function convertPokemonToHTML(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById("pokemonsList");

pokeAPI.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
})
 