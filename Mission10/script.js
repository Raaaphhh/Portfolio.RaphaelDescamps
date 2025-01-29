function AjoutLigne() {
    var table = document.getElementById("table");
    var ligne = table.insertRow(-1);
    var colonne1 = ligne.insertCell(0);
    var colonne2 = ligne.insertCell(1);
    var colonne3 = ligne.insertCell(2);
    var colonne4 = ligne.insertCell(3);
    colonne1.innerHTML = '<input type="text" name="description" value="DESC">';
    colonne2.innerHTML = '<input type="text" name="quantity" value="0">';
    colonne3.innerHTML = '<input type="text" name="unitPrice" value="0">';
    colonne4.innerHTML = '<input type="text" name="total" value="0" readonly>';
}

function Calculer(){
    var listePrix = document.getElementsBy("unitPrice");
    var listeQte = document.getElementsBy("quantity");
    var listeTtl = document.getElementsBy("total");
    for (var i = 0; i < listePrix.length; i++){
        listeTtl[i].value = listePrix[i].value * listeQte[i].value;
    }
}