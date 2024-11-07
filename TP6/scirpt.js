function connexion(){
    var login = document.getElementById("login").value;
    var mdp = document.getElementById("mdp").value;
    if(login == "admin" && mdp == "admin"){
        window.location.href = "yes.html";
    }
    else if(login == "" && mdp == ""){
        alert("Veuillez remplir les champs");
    }
    else{
        alert("Login ou mot de passe incorrect");
        window.location.href = "non.html";
    }
}

function vider(){
    document.getElementById("login").value = "";
    document.getElementById("mdp").value = "";
}
