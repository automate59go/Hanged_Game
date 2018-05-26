<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8" />
	<title>Hanged Game | Jouer</title>
	<link rel="icon" type="image/png" href="img/pendu2.0.png"/>
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<script type="text/javascript" src="js/script.js"></script>
</head>
<body>
	<?php include('controller/nav.php') ?>
	<section id="playS">

		<div id="animation"></div>

        <div id="motatrouver"></div><br>


            <form id="pseudoenter" name="joueur">

                <textarea rows="2" required autocomplete="off" name="pseudo" id="enterpseudo" placeholder="entrez votre pseudo !"></textarea>
                <input id="submit" class="button" type="button" value="Jouer !">

            </form>


        <a type="button" id="restart" href="javascript:window.location.reload()">Rejouer</a> <!-- permet de recharger la page -->

        <div id="result"></div>

        <iframe id="transfert" scrolling='no' frameborder='0' width='0' height='0'></iframe>

	</section>


    <link rel="stylesheet" type="text/css" href="clavier/clavier.css"/>
    <!-- on met dans une div l'image ainsi que la map avec toutes les area -->
    <div >
        <img id="centre" alt="clavier.png" usemap="#clavier" src="clavier/clavier.png">
        <map id="clavier" name="clavier">
            <!-- Pour une shape circle on prend coords du centre et le rayon-->
            <area alt="touche a" shape="circle" coords="71,52,27" id="65">
            <area alt="touche b" shape="circle" coords="141,53,26" id="66">
            <area alt="touche c" shape="circle" coords="208,53,26" id="67">
            <area alt="touche d" shape="circle" coords="279,52,26" id="68">
            <area alt="touche e" shape="circle" coords="358,54,28" id="69">
            <area alt="touche f" shape="circle" coords="428,52,27" id="70">
            <area alt="touche g" shape="circle" coords="512,52,27" id="71">
            <area alt="touche h" shape="circle" coords="579,52,26" id="72">
            <area alt="touche i" shape="circle" coords="658,53,26" id="73">
            <area alt="touche j" shape="circle" coords="729,53,27" id="74">
            <area alt="touche k" shape="circle" coords="72,136,27" id="75">
            <area alt="touche l" shape="circle" coords="142,135,26" id="76"> <!-- INDENTIFICATION DES TOUCHES -->
            <area alt="touche m" shape="circle" coords="209,135,26" id="77">
            <area alt="touche n" shape="circle" coords="279,137,28" id="78">
            <area alt="touche o" shape="circle" coords="358,136,27" id="79">
            <area alt="touche p" shape="circle" coords="428,135,27" id="80">
            <area alt="touche q" shape="circle" coords="511,137,26" id="81">
            <area alt="touche r" shape="circle" coords="580,136,26" id="82">
            <area alt="touche s" shape="circle" coords="659,136,25" id="83">
            <area alt="touche t" shape="circle" coords="727,137,28" id="84">
            <area alt="touche u" shape="circle" coords="71,217,26" id="85">
            <area alt="touche v" shape="circle" coords="141,219,27" id="86">
            <area alt="touche w" shape="circle" coords="209,217,26" id="87">
            <area alt="touche x" shape="circle" coords="279,217,26" id="88">
            <area alt="touche y" shape="circle" coords="357,217,26" id="89">
            <area alt="touche z" shape="circle" coords="426,218,27" id="90">
            <area alt="touche é" shape="circle" coords="511,218,26" id="201">
            <area alt="touche è" shape="circle" coords="580,217,26" id="200">
            <area alt="touche ê" shape="circle" coords="658,217,27" id="202">
            <area alt="touche ç" shape="circle" coords="730,219,26" id="199">
        </map>

    </div>


</body>

	<?php include('controller/footer.php') ?>
</html>

