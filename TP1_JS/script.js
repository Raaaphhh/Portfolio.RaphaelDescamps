function test_age(){
    let age = prompt("Quel est votre âge ?");
    if (age < 18){
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor = "red";
    } else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor = "green";
    }
}

function calculmoyenne(){
    var n1 = prompt("Entrez la première note");
    var n2 = prompt("Entrez la deuxième note");
    var n3 = prompt("Entrez la troisième note");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("La somme des notes est de : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("La moyenne est de : " + moyenne);

    if (moyenne < 10){
        document.write("Désolé vous êtes redoublant" + "<br>");
    }else{
        document.write("Félicitation vous êtes admis" + "<br>");
    }
}

function test_couleur(){
    let couleur = prompt("Entrez une couleur");
    if (couleur == "bleu" || couleur == "blue"){
        document.write("La couleur est bleu");
        document.body.style.backgroundColor = "blue";
    } else if (couleur == "rouge" || couleur == red){
        document.write("La couleur est rouge");
        document.body.style.backgroundColor = "red";
    } else if (couleur == "vert" || couleur == green){
        document.write("La couleur est vert" || couleur == green);
        document.body.style.backgroundColor = "green";
    } else {
        document.write("Couleur non reconnued donc je te met du noir ! ");
        document.body.style.backgroundColor = "black";
    }
}


function simple_affichage(){
    let nom = prompt("Entrez votre nom");
    let prenom = prompt("Entrez votre prénom");
    var age = prompt("Entrez votre prénom");
    document.write("Nom: " + nom + "<br>");
    document.write("Prénom: " + prenom + "<br>");
    document.write("Age: " + age + "<br>");
}
