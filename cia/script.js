// Disparation de la navbar au scroll

let header = document.querySelector(".header");
let lastScrollValue = 0;

let logocia = document.querySelector(".logo-cia");
let cia = document.querySelector(".cia");
let ciahidden = document.querySelector(".cia-hidden");

document.addEventListener('scroll',() => {
    let top  = document.documentElement.scrollTop;
    //disparition et apparition de la navbar au scroll
    if(lastScrollValue < top) {
    	header.classList.add("hidden");
    } else {
    	header.classList.remove("hidden");
    }
    lastScrollValue = top;
    //modification du logo de la navbar selon le scroll
    if(window.scrollY > 40) {
        logocia.style.display="none";
        cia.style.display="none";
        ciahidden.style.display="block";
    } else {
        logocia.style.display="block";
        cia.style.display="block";
        ciahidden.style.display="none";
    }
});

// Affichage aléatoire de l'image du heros

let x = document.getElementById("photo");
x.innerHTML = "<img src=\"./media/hero/Hero-"+Math.floor((Math.random()*6)+1)+".png\" width=\"500px\" height=\"auto\" />";
