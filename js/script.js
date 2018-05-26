window.addEventListener("load", function(){

    //initialisation des variables
    //récupèrer les éléments html
    var animation = document.getElementById("animation");
    var pseudo = document.getElementById("submit");
    var restart = document.getElementById("restart");
    var formuPseudo = document.getElementById("pseudoenter");
    var motaff = document.getElementById("motatrouver");
    var result = document.getElementById("result");
    var transfert = document.getElementById("transfert");

    //initialiser les différententes variables
    var score = 0;
    var letter= null;
    var motaTrouver = null;
    var mot = new Array(); //le tableau qui contient le mot
    var mots = new Array(); //la liste des mots
    var image = new Array(); //liste des images
    var tailleMot;
    var erreur = 0;
    var reussite = 0;
    var end = false;
    var verif = "";
    var pseudo = "";
    var check = true;
    var nbmot = 0;
    var trouve = false;

//charger les images du pendu dans un tableau
    image[0] = 'img/0.png';
    image[1] = 'img/1.png';
    image[2] = 'img/2.png';
    image[3] = 'img/3.png';
    image[4] = 'img/4.png';
    image[5] = 'img/5.png';
    image[6] = 'img/6.png';
    image[7] = 'img/7.png';
    image[8] = 'img/8.png';
    image[9] = 'img/9.png';


    //liste des mots
    mots[0]="bonjour";    mots[1]="coucou";    mots[2]="crayon";    mots[3]="livre";    mots[4]="lunette";    mots[5]="clavier";    mots[6]="souris";
    mots[7]="pendu";    mots[8]="ordinateur";    mots[9]="canette";    mots[10]="montre";    mots[11]="gauffre";    mots[12]="cable";
    mots[13]="internet";    mots[14]="clé";    mots[15]="casque";    mots[16]="automobile";    mots[17]="motorisation";    mots[18]="ceinture";
    mots[19]="gilet";    mots[20]="pantalon";    mots[21]="carte";    mots[22]="drone";    mots[23]="imprimante";    mots[24]="basket";    mots[25]="football";
    mots[26]="handball";    mots[27]="agenda";    mots[28]="porter";    mots[29]="courir";    mots[30]="nager";    mots[31]="manger";
    mots[32]="instruction";    mots[33]="condition";    mots[34]="conclusion";    mots[35]="possible";    mots[36]="expression";    mots[37]="introduction";
    mots[38]="exemple";    mots[39]="syntaxe";    mots[40]="vocabulaire";    mots[41]="correctement";    mots[42]="retrouve";    mots[43]="structure";
    mots[44]="attention";    mots[45]="couple";    mots[46]="libre";    mots[47]="valeur";    mots[48]="langage";    mots[49]="affectation";    mots[50]="alerter";
    mots[51]="effectuer";    mots[52]="lecteur";    mots[53]="navigateur";    mots[54]="meilleur";    mots[55]="olympiade";    mots[56]="science";
    mots[57]="technologie";    mots[58]="jaloux";    mots[59]="humeur";    mots[60]="malaise";    mots[61]="singe";    mots[62]="fille";
    mots[63]="enregistrement";    mots[64]="chien";    mots[65]="pizza";    mots[66]="challenge";    mots[67]="soeur";    mots[68]="commentaire";
    mots[69]="ensemble";    mots[70]="fraise";    mots[71]="pomme";    mots[72]="orange";    mots[73]="tabouret";    mots[74]="confortable";
    mots[75]="besoin";    mots[76]="film";    mots[77]="brosse";    mots[78]="disponible";    mots[79]="dimanche";    mots[80]="dernier";    mots[81]="premier";
    mots[82]="compagnie";    mots[83]="groupe";    mots[84]="musique";    mots[85]="chapeau";    mots[86]="constamment";    mots[87]="possible";
    mots[88]="homme";    mots[89]="femme";    mots[90]="skatepark";    mots[91]="bonheur";    mots[92]="publication";    mots[93]="zodiaque";
    mots[94]="banque";    mots[95]="monde";    mots[96]="calcul";    mots[97]="stationnement";    mots[98]="ambiance";    mots[99]="atelier";


    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/
    /* récupère les codes ASCII de chaque lettres */
    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/

    let charCode = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,201,200,202,199];
    let LettreCliqué = null;

    /* ------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/



    /* on recupère dans une var l'id du code ascii de la touche, on attribue l'évènement du click et la console renvoie le code du CharCode correspondant */

    a = document.getElementById("65");
    a.addEventListener("click", function(){
        LettreCliqué = String.fromCharCode(a.id); //String = attribut chaine de carac / à la chain on attribut le charcode à la chaine de carac
        traitement();
    })

    b = document.getElementById("66");

    b.addEventListener("click", function(){

        LettreCliqué =String.fromCharCode(b.id);
        traitement();

    })

    c = document.getElementById("67");

    c.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(c.id);
        traitement();
    })

    d = document.getElementById("68");

    d.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(d.id);
        traitement();
    })

    e = document.getElementById("69");

    e.addEventListener("click", function(){

        LettreCliqué =String.fromCharCode(e.id);
        traitement();
    })

    f = document.getElementById("70");

    f.addEventListener("click", function(){

        LettreCliqué =String.fromCharCode(f.id);
        traitement();
    })

    g = document.getElementById("71");

    g.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(g.id);
        traitement();
    })

    h = document.getElementById("72");

    h.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(h.id);
        traitement();
    })

    iy = document.getElementById("73");

    iy.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(iy.id);
        traitement();
    })

    j = document.getElementById("74");

    j.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(j.id);
        traitement();
    })

    k = document.getElementById("75");

    k.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(k.id);
        traitement();
    })

    l = document.getElementById("76");

    l.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(l.id);
        traitement();
    })

    m = document.getElementById("77");

    m.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(m.id);
        traitement();
    })

    n = document.getElementById("78");

    n.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(n.id);
        traitement();
    })

    o = document.getElementById("79");

    o.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(o.id);
        traitement();
    })

    p = document.getElementById("80");

    p.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(p.id);
        traitement();
    })

    q = document.getElementById("81");

    q.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(q.id);
        traitement();
    })

    r = document.getElementById("82");

    r.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(r.id);
        traitement();
    })

    s = document.getElementById("83");

    s.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(s.id);
        traitement();

    })

    t = document.getElementById("84");

    t.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(t.id);
        traitement();
    })

    u = document.getElementById("85");

    u.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(u.id);
        traitement();
    })

    v = document.getElementById("86");

    v.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(v.id);
        traitement();
    })

    w = document.getElementById("87");

    w.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(w.id);
        traitement();
    })

    x = document.getElementById("88");

    x.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(x.id);
        traitement();
    })

    y = document.getElementById("89");

    y.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(y.id);
        traitement();
    })

    z = document.getElementById("90");

    z.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(z.id);
        traitement();
    })

    é = document.getElementById("201");

    é.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(é.id);
        traitement();
    })

    è = document.getElementById("200");

    è.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(è.id);
        traitement();
    })

    ê = document.getElementById("202");

    ê.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(ê.id);
        traitement();
    })

    ç = document.getElementById("199");

    ç.addEventListener("click", function(){
        LettreCliqué =String.fromCharCode(ç.id);
        traitement();
    })
    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/
    /*------------------------------------------------------------------------*/

//script pour récupérer et vérifier le pseudo
    submit.addEventListener("click", function () {

        pseudo = document.joueur.pseudo.value; //on fixe la valeur de pseudo au contenu de l'input

        if(pseudo.length > 0) { //si il y a quelque chose dans l'input

            formuPseudo.style.display = "none"; //on masquer formuPseudo
            check = false; //Si check = true on ne peut pas jouer on le met donc à false

        }

    });

//définir un nombre random
    function maxword(max) { //de paramètre max
        return Math.floor(Math.random() * Math.floor(max)); // Math random = chiffre entre 0 et 1 / Math.floor =  renvoie le plus grand entier qui est inférieur ou égal à un nombre max
    }

    //on choisie le mot à trouver
    motaTrouver = mots[maxword(99)];
    tailleMot = motaTrouver.length;
    var mot2 = [];


    verif = motaTrouver[0]; //on ne peut plus choisir cette lettre

    //on masque les autres lettres par des tirés
    for(var i=0;i<motaTrouver.length;i++){
        mot2.push("_");
    }

    //on remplace les tirés par la première lettre si elle est plusieurs fois dans le mot
    letter = motaTrouver[0];

    for (var i=0; i<tailleMot; i++){
        if (motaTrouver[i] == letter){
            mot2[i] = letter;
            reussite = reussite +1;
        }
    }

    motaff.innerHTML = mot2.join(" "); //on affiche le résultat sur l'HTML

    function traitement(){

        //on récupère la lettre du clavier
        letter = LettreCliqué;
        letter = letter.toLowerCase(); //on met la lettre en minuscule




        if(verif.indexOf(letter) != -1){
            result.innerHTML = 'Veuillez choisir une autre lettre'; //message d'erreur
        }
        //si la lettre a déjà était utiliser on quitte la fonciton si le jeu est terminé -> quitte et si utilise n'a pas entrer son pseudo on quitte
        if (verif.indexOf(letter) != -1 || end || check) return;



        //script qui va cherche si la lettre est dans le mot
        for (var i=0; i<tailleMot; i++){ //on scan le mot

            if (motaTrouver[i] == letter){ //si on trouve la lettre
                result.innerHTML = ''; //enlever le message d'erreur si il y est
                trouve = true;
                reussite++; // ajoute 1 au réussite
                mot2[i] = letter; // remplacer dans le mot par la lettre
                verif = verif + letter; // on va bloquer la lettre dans le sytème de verif
                score = score + 10;
                motaff.innerHTML = mot2.join(" "); //on affiche le mot avec la nouvelle lettre
            }

        }

        if (!trouve){ //si la lettre n'a pas été trouvé
            result.innerHTML = ''; //enlever le message d'erreur si il y est
            erreur++;
            //changer l'image du pendu
            animation.style.backgroundImage = "url("+image[erreur]+")"; //on charge l'image en fonction du nombre d'erreur
            verif = verif + letter; // on va bloquer la lettre dans le sytème de verif
            score = score - 20;


            if (erreur == 9){
            //affiche le message de fin du jeu
                if(nbmot <= 1){
                    result.innerHTML = "Vous avez perdu ! " + pseudo + ", le mot était " + motaTrouver + '. ' +"Votre score est de " + score + " points " + "et vous avez trouvé " + nbmot + " mot";
                }else{
                    result.innerHTML = "Vous avez perdu ! " + pseudo + ", le mot était " + motaTrouver + '. ' +"Votre score est de " + score + " points " + "et vous avez trouvé " + nbmot + " mots";
                }

                end = true //on ne peut pu rejouer
                restart.style.display = "block"; // on va afficher restart

                //on envoie score et pseudo à php
                transfert.src = 'controller/traitement.php?score=' + score + '&pseudo=' + pseudo + '';

            }
        }

        if(reussite == tailleMot){ //si le mot est trouver

            score = score + 100;
            nbmot = nbmot + 1;
            // réinisialise les variables
            erreur = 0;
            reussite = 0;
            animation.style.backgroundImage = "url("+image[0]+")";
            //on choisie le nouveau mot à trouver
            motaTrouver = mots[maxword(100)];
            //on définie les nouvelle variable
            tailleMot = motaTrouver.length;
            mot2 = [];


            verif = motaTrouver[0];

            for(var i=0;i<motaTrouver.length;i++){
                mot2.push("_");
            }

            letter = motaTrouver[0];

            for (var i=0; i<tailleMot; i++){
                if (motaTrouver[i] == letter){
                    mot2[i] = letter;
                    reussite = reussite +1;
                }
            }

            motaff.innerHTML = mot2.join(" ");



        }

    }

});