sessionStorage.setItem("Tableau",JSON.stringify(tableau_php));

let musique = document.getElementById("music");
let widget = SC.Widget(musique);
let Slider = document.getElementById("slider");
let attendu = document.getElementById("Turn_text");
let Text_input = document.getElementById("Text_input");
let audio = document.getElementById("audio");
audio.volume = 0.2;


let url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
let Compteur = 0;
let Compteur_Tab = 0;
let Nombre_de_points = 0;
let Tableau = tableau_php[Compteur_Tab];
let status = false;
let Nombre_de_son = Nombre_son_php;

function Set_volume(volume=20){
 //console.log(volume);
 widget.setVolume(volume);
}

//Verif si la réponse est correcte
function Verif(Nom=Tableau[0],Auteur=Tableau[1],Date=Tableau[2]){
  let input = document.getElementById("Text_input"); 
 if (Compteur == 0){
    if (input.value != Auteur ){
      Reponse(false);
    }
    else{
      Reponse(true);
      Goute();
      Gestion_Auteur(input.value,true);
      input.placeholder = "Date"
    }
  }
  else if (Compteur == 1) {
      if(input.value != Date){
        Reponse(false);
      }
      else{
        Reponse(true);
        Goute();
        Gestion_Date(input.value,true);
        input.placeholder  = "Nom Musique";
      }
    }
  else if (Compteur == 2){
      if (input.value != Nom){
        Reponse(false);
      }
      else{
        Reponse(true);
        Goute();
        Gestion_Nom(input.value,true);
        Next_song();
    }
  }
  input.value = "";
}

function Goute(){
   audio.play();
}


//Passe au prochain son MAJ du tableau
function Next_song(){
  Compteur_Tab++;
  //Si c'est la fin du blind test
  if (Compteur_Tab == Nombre_de_son){
    Text_input.placeholder = "Fin du blind Test";
    widget.pause();
    Text_input.disabled = "true";
    sessionStorage.setItem("Nombre_de_points",Nombre_de_points);
    document.location.href = "/Blind_Test/End/End.html"
  }
  //Sinon son suivant
  else {
    Compteur = 0;
    var Extraction_cover = tableau_php[Compteur_Tab-1];
    var Cover = Extraction_cover[4];
    Fail_reponse();
    Spawn_Cover(Cover);
    Tableau = tableau_php[Compteur_Tab];
    Text_input.placeholder = "Auteur";


    musique.setAttribute("src",url+Tableau[3]);
    setTimeout(function(){widget.play();}, 4000);


    Verif(Tableau[0],Tableau[1],Tableau[2],Tableau[4]);
    Input_Manager("1","white");
  }

}
//Animation de la cover
function Spawn_Cover(lien){
  var cover = document.getElementById("Image_Cover");
  cover.src = lien;
  cover.style.opacity = "1";
  setTimeout(function(){
  cover.style.opacity = "0";
  Clear_Reponse();},4000);
}

//Bonne ou mauvaise réponse et incrémente compteur et le nombre de points
function Reponse(boolen){
  if (boolen){
    Input_Manager("1","#5EDE97");
    Nombre_de_points ++;
    Compteur ++;
  }
  else{
    Input_Manager("0.5","#FC4444");
  }
}
//Passer à la prochaine question si on connait pas 
function Passer(){
    Compteur ++;
    Input_Manager("1","white");
    if (Compteur == 1){
      Gestion_Auteur("rien",false);
      Text_input.placeholder = "Date";
    }
    else if (Compteur == 2) {
      Gestion_Date("rien",false);
      Text_input.placeholder  = "Nom Musique";
    }
    else{
      Gestion_Nom("rien",false);
      Next_song();
    }

}
//Gestion du input
function Input_Manager(Time,Color){
    Text_input.style.transition = Time+"s";
    Text_input.style.backgroundColor = Color;

}

//Player de soundcloud
function Jouer()
{
  if (!status){
    widget.play();
    status = true;
  }
  else{
    widget.pause();
    status = false;
  }
}

//Appuie sur entréé pour valider
Text_input.addEventListener("keyup",function(event){
  if (event.keyCode == 13){
    document.getElementById("Valider").click();
  }
})

//Ajustement du volume avec le slider
slider.oninput = function() {
  widget.setVolume(Slider.value);
}

//Gestion de la partie réponse 
function Gestion_Auteur(Nom,Check){
  if (Check){
    document.getElementById("Reponse_auteur").innerHTML = Nom;
  }
  else {
    document.getElementById("Reponse_auteur").innerHTML = "/";
  }
}
function Gestion_Date(Date,Check){
  if (Check){
    document.getElementById("Reponse_date").innerHTML = Date;
  }
  else {
    document.getElementById("Reponse_date").innerHTML = "/";
  }
}
function Gestion_Nom(Nom,Check){
  if (Check){
    document.getElementById("Reponse_nom").innerHTML = Nom;
  }
  else {
    document.getElementById("Reponse_nom").innerHTML = "/";
  }
}

//Clear de la partie réponse quand on change de son
function Clear_Reponse(){
  var Liste_DOM = ["Reponse_auteur","Reponse_date","Reponse_nom"];
  for (var i = 0; i < Liste_DOM.length; i++) {
    document.getElementById(Liste_DOM[i]).style.opacity = "1";
    document.getElementById(Liste_DOM[i]).innerHTML = "";
  }
}

function Fail_reponse(){
  var Liste_DOM = ["Reponse_auteur","Reponse_date","Reponse_nom"];
  var Liste_Tab = [Tableau[1],Tableau[2],Tableau[0]];
  //console.log(Liste_Tab);
  for (var i = 0; i <= 2; i++) {
    if (document.getElementById(Liste_DOM[i]).textContent == "/")
    {
      document.getElementById(Liste_DOM[i]).innerHTML = Liste_Tab[i];
    }
  }
}
