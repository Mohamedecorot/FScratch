const imgImprovise = document.getElementById('img-improvise');
const popup = document.getElementById('pop-up');
let playOnce = true;

window.addEventListener('scroll', function(){

  scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

  // IMAGE APPEAR (APPEAR AT 42% OF SCROLL)
  if (scrollValue > 0.45){
    imgImprovise.style.opacity = '1';
    imgImprovise.style.transform = 'none';
  };

  // NEWSLETTER POPUP (APPEAR AT 84% OF SCROLL)
  function playFunctionOnce(){
    if (scrollValue > 0.84 && playOnce){
      setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'none';
      }, 1500);
      playOnce = false;  
    };
  };  
  playFunctionOnce();
});

document.getElementById('close').addEventListener('click', () => {
  popup.style.opacity = '0';
  popup.style.transform = 'translateX(500px)';
});
