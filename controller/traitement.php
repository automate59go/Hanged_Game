<?php

// on récupère la variable transmise par la méthode GET :

$score = $_GET['score'];

$pseudo = $_GET['pseudo'];

// on va se connecter à la bdd

    	$bdd = new PDO('mysql:host=localhost;dbname=nameofbdd;charset=utf8', 'user', 'mdp'); //méthode de connection





$req = $bdd->prepare('INSERT INTO stats(pseudo, score) VALUES(:pseudo, :score)'); //on prépare la requête

$req->execute(array( //créer un tableau qui contient les valeur -> la bdd fonctionne en tableau

	'pseudo' => $pseudo,

	'score' => $score

	));



echo 'Le score a bien été ajouté'; //debug et verif





?>