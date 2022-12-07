let body = document.querySelector('body')


function darkMode(){
    
    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background1.jpg)";
    document.getElementById("body").style.transitionDuration = '2000ms';

    const pokemonsBlack = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsBlack.length; i++) {
        pokemonsBlack[i].style.backgroundColor = "rgba(0,0,0,0.5)";
        
    }
    document.getElementById("content").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    document.getElementById("content").style.transitionDuration = '2500ms';

}

function lightMode(){

    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background.jpg)";
    document.getElementById("body").style.transitionDuration = '2000ms'

    const pokemonsWhite = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsWhite.length; i++) {
        pokemonsWhite[i].style.backgroundColor = "#fff";
        pokemonsWhite[i].style.transitionDuration = '2500ms';
    }
    document.getElementById("content").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("content").style.transitionDuration = '2500ms';

}
