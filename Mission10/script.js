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
    var table = document.getElementById("table");
    

    for (var i = 0, row; row = table.rows[i]; i++) {
        var totalQuantite = 0;
        var totalPrixUnitaire = 0;
        var totalSum = 0;
        var quantite = parseFloat(row.cells[1].querySelector("input").value) || 0;
        var unitPrice = parseFloat(row.cells[2].querySelector("input").value) || 0;

        totalQuantite = totalQuantite + quantite;
        totalPrixUnitaire = totalPrixUnitaire + unitPrice;
        totalSum = totalSum + quantite * unitPrice;

        row.cells[3].querySelector("input").value = totalSum;

        console.log("Total Quantity: " + totalQuantite);
        console.log("Total Unit Price: " + totalPrixUnitaire);
    }
}

// function RemplirAuto(){
//     let lignes = document.querySelectorAll("tr");
//     lignes.forEach(function(ligne){
//         let colonnes = ligne.querySelectorAll("td");
//         colonnes.forEach(function(colonne){
//             let input = colonne.querySelector("input");
//             if(input){
//                 input.value = "test";
//             }
//         });
//     });
// }

