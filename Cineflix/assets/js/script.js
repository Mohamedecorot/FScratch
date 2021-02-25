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
    } else {
        document.getElementById(id).style.display="none";
    }
    return true;
}
// http://www.supportduweb.com/scripts_tutoriaux-code-source-33-afficher-cacher-un-div-element-en-javascript.html

function afficher_captcha()
{
    document.getElementById('info').style.visibility="hidden";
    document.getElementById('captcha').style.visibility="visible";
}


let E_mail = document.getElementById("E_mail");
let SMS = document.getElementById("SMS");
let optionemail = document.getElementById("optionemail");
let optionsms = document.getElementById("optionsms");
