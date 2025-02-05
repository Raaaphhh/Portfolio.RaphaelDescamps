//lancement du son
document.getElementById("btndemare").addEventListener("click", function() {
    sessionStorage.setItem("playSound", "true"); // On sauvegarde l'info qu'on doit jouer le son
    window.location.href = "DossMenuPortfolio/MenuHomePage/index.html"; // Redirection vers la seconde page
});
