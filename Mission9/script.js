function testQCM() {
    let compteur = 0; // Compteur de bonnes réponses
    let reponses = document.querySelectorAll("input[type=checkbox]:checked"); // On récupère les réponses cochées
    reponses.forEach(function(reponse) {
    if (reponse.id === "1") {
        compteur += 1;
    }
});
}