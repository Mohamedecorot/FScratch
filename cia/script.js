// Disparation de la navbar au scroll

let header = document.querySelector(".header");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
    let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	header.classList.add("hidden");
    } else {
    	header.classList.remove("hidden");
    }
    lastScrollValue = top;
});

// Affichage aléatoire de l'image du heros

let x = document.getElementById("photo");
x.innerHTML = "<img src=\"./media/hero/Hero-"+Math.floor((Math.random()*6)+1)+".png\" width=\"500px\" height=\"auto\" />";
