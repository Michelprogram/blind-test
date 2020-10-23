let slider = document.getElementById('slider');
let texte = document.getElementById('Nb_son');
let check_0 = document.getElementById("C0");
let check_1 = document.getElementById("C1");
let check_2 = document.getElementById("C2");
let Overlay = document.getElementById("Overlay");
let text_pop = document.getElementById("Texte_Pop_up");
let musique_style = "";


slider.oninput = function(){
  texte.innerHTML = slider.value;
}
function Close(){
  Overlay.style.display = "none";
}

document.getElementById("formulaire").addEventListener("submit",function (e){
  var erreur;
  if ((check_0.checked && check_1.checked) || (check_0.checked && check_2.checked) || (check_1.checked && check_2.checked)){
    erreur = "Choisir qu'un seul style musical";
  }
  else if ((!check_0.checked) && (!check_1.checked) && (!check_2.checked)) {
    erreur = "Choisir au moins un style de musique";
  }
  else
  {
   this.method = "POST";
   this.action = "../Game/BlindTest.php";
  }
  if (erreur){
    e.preventDefault();
    text_pop.innerHTML = erreur;
    Overlay.style.display = "flex";
    erreur="";
  }
});

