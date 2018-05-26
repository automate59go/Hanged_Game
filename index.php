<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8" />
	<title>Hanged Game | Acceuil</title>
	<!-- Balise qui permet de retrouver le style de la page -->
	<link rel="icon" type="image/png" href="img/pendu2.0.png"/>
	<link rel="stylesheet" type="text/css" href="css/style.css" />	
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
</head>

<body>
	<!--Contenu aidant a la navigation-->
	<?php include('controller/nav.php') ?>
	<section id="section1">
		<div class="left-1 top-1">
			<h1>Bienvenue sur le Hanged Game</h1>
			<img id="penduMP" src="./img/9.png">
			<p class="bottom-1">Le Pendu est un jeu consistant à trouver un mot en devinant quelles sont les lettres qui le composent.</p>
			<a href="play.php" class="button left-1">Jouer !</a>
		</div>
	</section>
	<section id="section2">
		<div class="right-1 top-1">
			<h1>Règle du jeu</h1>
			<p>Une partie commence avec un mot aléatoire à trouvé.</p>
			<p>La première et dernière lettres du mot sont visibles.</p>
			<p>A chaque erreur la potence se dessine jusqu'a ce que le bonhomme soit pendu.</p>
			<p>Si le bonhomme meurt avant que tu trouve le mot.</p>
			<p>TU AS PERDU !</p>
		</div>
	</section>
</body>
	<?php include('controller/footer.php') ?>
</html>