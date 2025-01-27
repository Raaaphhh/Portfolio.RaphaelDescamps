function testQCM() {
    let compteur = 0; // Compteur de bonnes réponses
    let reponses = document.querySelectorAll("input[type=checkbox]:checked"); // On récupère les réponses cochées
    
    reponses.forEach(function(reponse) {
        if (reponse.dataset.correct === "true") {
            compteur += 1;
        }
    });

    let emplacementresultat = document.getElementById("result");
    if (emplacementresultat) {
        emplacementresultat.innerHTML = "Vous avez <span style='color: red;'>" + compteur + "</span> bonnes réponses.";
    } else {
        console.error("L'élément avec l'ID 'result' est introuvable.");
    }
}

let corrigeButton = document.getElementById("corrige");
if (corrigeButton) {
    corrigeButton.addEventListener("click", testQCM);
} else {
    console.error("L'élément avec l'ID 'corrige' est introuvable.");
}

// renitialiser les cases cochées
let effacerButton = document.getElementById("effacer");
if (effacerButton) {
    effacerButton.addEventListener("click", function() {
        let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    });
} else {
    console.error("L'élément avec l'ID 'effacer' est introuvable.");
}