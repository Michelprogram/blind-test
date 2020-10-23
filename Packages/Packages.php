<?php 
 function connect(){
  $Connexion = new PDO('mysql:host=127.0.0.1;dbname=Blind_Test;charset=utf8',"root","cholliereleplusbeaudesbg");

    if (! $Connexion)
    {
        //echo "Connexion serveur impossible <br>";
         return exit;
    }
    else
    {
        //echo "Connection réussie <br> ";
        return $Connexion;
    }
 }

 function Random(){
   $connexion = connect();
   $requete = ("SELECT COUNT(*) FROM American_rap");
   $reponse = $connexion->query($requete);
   $ligne = $reponse->fetch();
   $Nombre_de_ligne= ($ligne[0]);
   return rand(1,$Nombre_de_ligne);
}

function Witch_Box($box0,$box1,$box2){
	if (isset($_POST[$box0]))
	{
		return "American_rap";
	}
	else if (isset($_POST[$box1]))
	{
		return "Rap_français";
	}
	else
	{
		return "Classique";
	}
}

 function Creation_Tab($size){
 $Tab = array();
 $Taille_Tab = 0;
 $Verif = false;
 while ($Taille_Tab != $size)
  {
    $Nombre = Random();
    foreach($Tab as $i)
        {
          if ($i == $Nombre)
                    {
                      $Verif = true;
                    }
        }
    if($Verif != true)
        {
          $Taille_Tab ++;
          array_push($Tab,$Nombre);
        }
    $Verif =false;
  }
 return $Tab;
  }

function Requete($id,$table)
   {
      $connexion=connect();
      $requete =(" SELECT Nom_Musique,Auteur,Date,Code_soundcloud,Cover FROM $table where Id=$id");
      $resultat=$connexion->query($requete);
      $ligne=$resultat->fetch();

      $Nom = $ligne['Nom_Musique'];
      $Auteur = $ligne['Auteur'];
      $Date = $ligne['Date'];
      $Code = $ligne['Code_soundcloud'];
      $Cover = $ligne['Cover'];

     return array($Nom,$Auteur,$Date,$Code,$Cover);
   }
function Liste_Son($size,$table){
  $Big_Tab = array();
  $Tab_id = Creation_Tab($size);
   for($i=0;$i<$size;$i++){
     $Musique_Tempo = Requete($Tab_id[$i],$table);
     array_push($Big_Tab,$Musique_Tempo);
   }
    return $Big_Tab;
}

?>
