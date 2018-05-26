<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Hanged Game | Classement</title>
  <link rel="icon" type="image/png" href="img/pendu2.0.png"/>
  <link rel="stylesheet" type="text/css" href="css/style.css" />

</head>
<body>
<?php include('controller/nav.php') ?>

<?php
try //on tente
{
	// On se connecte à la bdd
	$bdd = new PDO('mysql:host=localhost;dbname=nameofbdd;charset=utf8', 'user', 'mdp');
}
catch(Exception $e) //si erreur
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage('Erreur BDD'));
}

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table stats et on classe le score de manière decroissante avec le : ORDER BY *colonne* DESC
$reponse = $bdd->query('SELECT * FROM stats ORDER BY score DESC'); //methode de connection on selectionne toute la table et on classe par ordre décroissant de score



?>

<table>
   <caption id="titre_classement">Classement du Hanged Game</caption> <!-- titre du tableau -->

   <tr>
       <th>id</th>
       <th>Pseudo</th>
       <th>Score</th>
   </tr>
   <?php
   // On affiche chaque entrée une à une
while ($donnees = $reponse->fetch()) //tant qu'il y a une donnée on affiche
{
    ?>
   <tr>
       <td><?php echo $donnees['id']; ?></td>
       <td><?php echo $donnees['pseudo']; ?></td>
       <td><?php echo $donnees['score']; ?></td>
   </tr>

<?php
}

$reponse->closeCursor(); // Termine le traitement de la requête

?>
</table>
<?php include('controller/footer_stats.php') ?>
 </body>
</html>