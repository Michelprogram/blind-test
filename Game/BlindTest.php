<!DOCTYPE html> <html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Blind Test</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../CSS/footer.css">
    <link rel="stylesheet" href="../CSS/Principal.css">
     <?php include "../Packages/Packages.php" ?>
  </head>
  <body>
    <?php
	$Musique_type = Witch_Box('checkbox_0','checkbox_1','checkbox_2');
	//echo $Musique_type;
	$Nombre_son = $_POST['slider'];
	$Table_All = Liste_Son($Nombre_son,$Musique_type);
	$First_song = $Table_All[0];
	$First_CS = $First_song[3];
	//echo $First_CS;
	//echo $Nombre_son;


    ?>
    <iframe display="none" onload="Set_volume()" id ="music"  scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/<?php echo $First_CS ?>"></iframe>
    <h1>Blind Test</h1>
	<audio id="audio" src="../../song/goute.mp3"></audio>
        <div class="Principal">
        <div id="Reponse">
          <div> Auteur : <span id="Reponse_auteur"></span></div>
         <div> Date : <span id="Reponse_date"></span></div>
         <div> Nom Musique : <span id="Reponse_nom"></span></div>
	</div>
        <div id="Reponse_input">
          <input id="Text_input" type="text" placeholder="Auteur">
        </div>
        <div id="Bottom_Button">
          <button class="Two_button" type="button" name="button" onclick="Jouer()">Play/Pause</button>
          <button class="Two_button" type="button" id="Valider" name="button" onclick="Verif()">Valider</button>
          <button class="Two_button" type="button" name="button" onclick="Passer()">Passer</button>
          <div id="Volume_part">
            <img id="image_Volume" src="../../image/BlindTest/volume.png" >
            <input id="slider"  type="range" min="0" max="50">
          </div>
        </div>
    </div>
    <footer>
	<div>
	  <a href="https://genius.com/"  target="_blank"><img src="../../image/BlindTest/Genius.png" title="Cover from genius"></a>
	</div>
      <div >
        <a href="https://soundcloud.com" target="_blank"><img src="../../image/BlindTest/soundcloud.png" title="Song from soundcloud"></a>
      </div>
      <div id="Twitter">
        <a href="https://twitter.com" target="_blank"><img src="../../image/BlindTest/twitter.png" title="C'est nous wesh"></a>
      <div id="Text_twitter">
        <a class="Link_profile" href="https://twitter.com/loutre_verte">@Loutre_Verte </a><br>
        <a class="Link_profile" href="https://twitter.com/monsieurdu0000">@monsieurdu0000</a>
      </div>
      </div>
    </footer>
    <div id="Container_Cover">
	<img id="Image_Cover">
   </div>
   <script src="https://w.soundcloud.com/player/api.js" type="text/javascript"></script>
  </body>
</html>
<script type ="text/javascript">
let Nombre_son_php = <?php echo $Nombre_son; ?>;
let tableau_php = <?php print_r(json_encode ($Table_All)); ?>;

</script>
<script type="text/javascript" src="script.js"></script>

