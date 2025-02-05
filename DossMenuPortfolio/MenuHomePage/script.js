window.onload = function() {
    if (sessionStorage.getItem("playSound") === "true") {
        let sound = new Audio("http://127.0.0.1:5501/AssetsHomePage/launchsound.mp3");
        let startTime = parseFloat(sessionStorage.getItem("audioTimestamp")) || 0;
        sound.currentTime = startTime; // Reprend le son là où il s'est arrêté
        sound.play();
        
        sessionStorage.removeItem("playSound");
        sessionStorage.removeItem("audioTimestamp");
    }
};

