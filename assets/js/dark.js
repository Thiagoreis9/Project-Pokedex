let body = document.querySelector('body')


function darkMode(){

    
    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background1.jpg)";

    //document.getElementsByClassName(".pokemonLayout").style.backgroundColor = "black";
    const pokemonsBlack = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsBlack.length; i++) {
        pokemonsBlack[i].style.backgroundColor = "rgba(0,0,0,0.5)";
    }

    document.getElementById("content").style.backgroundColor = "rgba(0, 0, 0, 0.8)";

}
function lightMode(){

    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background.jpg)";

    const pokemonsWhite = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsWhite.length; i++) {
        pokemonsWhite[i].style.backgroundColor = "#fff";
    }
    document.getElementById("content").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
}
