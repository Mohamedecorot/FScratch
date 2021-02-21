console.log("coucou")
console.log(document.querySelector(".answer"))
function afficher_cacher(id)
{
    if(document.getElementById(id).style.display=="none") {
        document.getElementById('answer1').style.display="none";
        document.getElementById('answer2').style.display="none";
        document.getElementById('answer3').style.display="none";
        document.getElementById('answer4').style.display="none";
        document.getElementById('answer5').style.display="none";
        document.getElementById(id).style.display="block";
        document.getElementById('bouton_'+id).innerHTML='-';
    } else {
        document.getElementById(id).style.display="none";
        document.getElementById('bouton_'+id).innerHTML='+';
    }
    return true;
}