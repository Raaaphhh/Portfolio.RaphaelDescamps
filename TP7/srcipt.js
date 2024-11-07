function resultat(){
    // Première ligne
    var valPrx1 = document.getElementById("prix1").value;
    var ValQua1 = document.getElementById("quantite1").value;
    var resligne1 = Number(valPrx1) * Number(ValQua1);
    resultat1.value = resligne1;

    // Deuxième ligne
    var valPrx2 = document.getElementById("prix2").value;
    var ValQua2 = document.getElementById("quantite2").value;
    var resligne2 = Number(valPrx2) * Number(ValQua2);
    resultat2.value = resligne2;

    // Troisième ligne
    var valPrx3 = document.getElementById("prix3").value;
    var ValQua3 = document.getElementById("quantite3").value;
    var resligne3 = Number(valPrx3) * Number(ValQua3);
    resultat3.value = resligne3;

    resligne1 = Number(resultat1.value);
    resligne2 = Number(resultat2.value);
    resligne3 = Number(resultat3.value);
    resTotal = resligne1 + resligne2 + resligne3;
    totale.value = resTotal;
}


function vider(){
    document.getElementById("prix1").value = "";
    document.getElementById("quantite1").value = "";
    document.getElementById("resultat1").value = "";

    document.getElementById("prix2").value = "";
    document.getElementById("quantite2").value = "";
    document.getElementById("resultat2").value = "";

    document.getElementById("prix3").value = "";
    document.getElementById("quantite3").value = "";
    document.getElementById("resultat3").value = "";

    document.getElementById("totale").value = "";
}