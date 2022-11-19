const pokemonList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 5
let offset = 0

function convertPokemonTypesToHTML(pokemonTypes){

    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}

function loadPokemonItems(limit, offset){
    function convertPokemonToHTML(pokemon){
        return 
    }

    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
    })
}

loadMoreButton.addEventListener('click', () => {
    loadPokemonItems()
});


 