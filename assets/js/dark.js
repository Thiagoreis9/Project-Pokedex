let body = document.querySelector('body')


function darkMode(){
    
    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background1.jpg)";
    document.getElementById("body").style.transitionDuration = '1500ms';

    const pokemonsBlack = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsBlack.length; i++) {
        pokemonsBlack[i].style.backgroundColor = "rgba(0,0,0,0.5)";
        pokemonsBlack[i].style.transitionDuration = '1500ms';
        
    }

    document.getElementById("button").style.backgroundColor = "#fff";
    document.getElementById("button").style.borderColor = "#000";
    document.getElementById("button").style.boxShadow = "1px  2px 12px white";
    document.getElementById("button").style.transitionDuration = '1500ms';

    document.getElementById("content").style.backgroundColor = "#000";
    document.getElementById("content").style.transitionDuration = '1500ms';

}
function darkMode1(){
    
    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background1.jpg)";
    document.getElementById("body").style.transitionDuration = '1500ms';

    const pokemonsBlack = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsBlack.length; i++) {
        pokemonsBlack[i].style.backgroundColor = "rgba(0,0,0,0.5)";
        pokemonsBlack[i].style.transitionDuration = '1500ms';
        
    }

    document.getElementById("buttons").style.backgroundColor = "#fff";
    document.getElementById("buttons").style.borderColor = "#000";
    document.getElementById("buttons").style.boxShadow = "1px  2px 12px white";
    document.getElementById("buttons").style.transitionDuration = '1500ms';  

    document.getElementById("content").style.backgroundColor = "rgba(0,0,0,0.8)";
    document.getElementById("content").style.transitionDuration = '1500ms';

}

function lightMode(){

    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background.jpg)";
    document.getElementById("body").style.transitionDuration = '1500ms'

    const pokemonsWhite = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsWhite.length; i++) {
        pokemonsWhite[i].style.backgroundColor = "#fff";
        pokemonsWhite[i].style.transitionDuration = '1500ms';
    }
    document.getElementById("button").style.backgroundColor = "#000";
    document.getElementById("button").style.borderColor = "#fff";
    document.getElementById("button").style.boxShadow = "1px  2px 12px black";
    document.getElementById("button").style.transitionDuration = '1500ms';

    document.getElementById("content").style.backgroundColor = "rgba(255,255,255,0.8)";
    document.getElementById("content").style.transitionDuration = '1500ms';

}
function lightMode1(){

    document.getElementById("body").style.backgroundImage = "url(../assets/imagens/background.jpg)";
    document.getElementById("body").style.transitionDuration = '1500ms'

    const pokemonsWhite = document.getElementsByClassName("pokemonLayout");
    for (let i = 0; i < pokemonsWhite.length; i++) {
        pokemonsWhite[i].style.backgroundColor = "#fff";
        pokemonsWhite[i].style.transitionDuration = '1500ms';
    }
    
    document.getElementById("buttons").style.backgroundColor = "#000";
    document.getElementById("buttons").style.borderColor = "#fff";
    document.getElementById("buttons").style.boxShadow = "1px  2px 12px black";
    document.getElementById("buttons").style.transitionDuration = '1500ms';

    document.getElementById("content").style.backgroundColor = "rgba(255,255,255,0.8)";
    document.getElementById("content").style.transitionDuration = '1500ms';

}
