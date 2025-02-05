//lancement du son
document.getElementById("btndemare").addEventListener("click", function() {
    let sound = new Audio("http://127.0.0.1:5501/AssetsHomePage/launchsound.mp3");
    sound.play(); // Joue immédiatement

    sessionStorage.setItem("playSound", "true"); // Indique qu'on joue le son
    sessionStorage.setItem("audioTimestamp", sound.currentTime); // Sauvegarde la position du son

    setTimeout(() => {
        window.location.href = "DossMenuPortfolio/MenuHomePage/index.html"; // Redirection après 1 seconde
    }, 1000);
});
