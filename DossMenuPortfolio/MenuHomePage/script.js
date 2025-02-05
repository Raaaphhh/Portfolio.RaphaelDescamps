window.onload = function() {
    if (sessionStorage.getItem("playSound") === "true") {
        let sound = document.getElementById("launch-sound");
        sound.play(); // Jouer le son
        sessionStorage.removeItem("playSound"); // Supprimer pour éviter de relancer à chaque refresh
    }
};

