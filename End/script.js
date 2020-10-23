//let Tableau = [["rap god","eminem","2014","139606407","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F058e2359838c93395c36119b48a2eff6.1000x1000x1.png"],["moonlight","xxxtentacion","2018","543819222","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F4d20e9fc0d3dd5b8d21bd0ecc02fc0b0.300x300x1.jpg"],["swervin","a boogie with da hoodie","2019","547295505","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F557f4ca436aaabc4210bd3850f96b954.1000x1000x1.jpg"],["king of my city","a boogie with da hoodie","2020","751866820","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F5512a9aeb31060724ded1cf841294d6a.1000x1000x1.jpg"],["go loko","yg","2019","611540943","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2Fbcac3ae641ccfe4316894328432e3445.1000x1000x1.jpg"],["mixed personalities ","ynw melly","2019","560158971","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F077f633f603d1257f475e91f551b152e.1000x1000x1.jpg"],["look at me","xxxtentacion","2016","239777850","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F68b07d08eaa78793a841de75eb326756.1000x1000x1.jpg"],["lil tijay","long time","2018","432128352","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F4e6671eb3bb0f8f3f49305af2f8f76cb.500x500x1.jpg"],["i","lil skies","2019","582921222","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F31a21dbbb6b8d2cfbae34cc418a132b7.770x770x1.jpg"],["lil tijay","f.n","2018","661628567","https:\/\/t2.genius.com\/unsafe\/275x0\/https%3A%2F%2Fimages.genius.com%2F645587e20411c12f2423ab02c7a2ed56.1000x1000x1.jpg"]];
let Tableau = JSON.parse(sessionStorage.getItem("Tableau"));
let corps_tab = document.getElementById("tbody");
let Nb_points = sessionStorage.getItem("Nombre_de_points");
let Total = (Tableau.length * 3);

document.getElementById("Note").innerHTML = Nb_points;
document.getElementById("Total").innerHTML = Total;

function Generation_Tableau(){
  for (var i = 0; i < Tableau.length; i++) {
    var create_tr = document.createElement('TR');

    
    corps_tab.appendChild(create_tr);


    var create_td = document.createElement("TD");
    var content_td = document.createTextNode(i+1);
    create_td.appendChild(content_td);

    create_tr.appendChild(create_td);


    for (var j = 0; j < Tableau[i].length; j++) {
      var tempo = Tableau[i];
      var create_td = document.createElement("TD");
      var content_td;
      if (j ==0 || j == 1 || j == 2|| j == 4)
      {
        if (j != 4){
           content_td = document.createTextNode(tempo[j]);
        }
        else {
          var create_img = document.createElement("IMG");
          create_img.setAttribute("class","Cover_album");
          create_img.setAttribute("src",tempo[j]);
          content_td = create_img;

        }
        create_td.appendChild(content_td);
        create_tr.appendChild(create_td);
      }

    }

  }

}

