function testQCM() {
    let compteurbr = 0; // compteurbr de bonnes réponses
    let compteurmr = 0; // compteurmr mauvaise réponses
    let reponses = document.querySelectorAll("input[type=radio]:checked"); // On récupère les réponses cochées
    // let allreponses = document.querySelectorAll("input[type=radio]:unchecked");
    
    reponses.forEach(function(reponse) {
        if (reponse.dataset.correct === "true") {
            compteurbr += 1;
        }
        else if(reponse.dataset.correct === "false"){
            compteurmr +=1;
        }
    });

    if (compteurbr === 0 && compteurmr === 0){
        alert("Repondez à au moins Une questions pour generer votre résultats")
    }
    else{
        let emplacementresultat = document.getElementById("resultplace");
    if (emplacementresultat) {
        emplacementresultat.innerHTML = "Vous avez <span style='color: green;'>" + compteurbr + "</span>/10 bonnes réponses et " + "<span style='color: red;'>" + compteurmr + "</span> mauvaises réponses";
    } else {
        console.error("L'élément avec l'ID 'result' est introuvable.");
    }
    }
}

let corrigeButton = document.getElementById("resultat");
if (corrigeButton) {
    corrigeButton.addEventListener("click", testQCM);
} else {
    console.error("L'élément avec l'ID 'corrige' est introuvable.");
}







// renitialiser les cases cochées
let effacerButton = document.getElementById("effacer");
if (effacerButton) {
    effacerButton.addEventListener("click", function() {
        let checkboxes = document.querySelectorAll("input[type=radio]:checked");
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    });
} else {
    console.error("L'élément avec l'ID 'effacer' est introuvable.");
}