function init() {
    // Initialisation de la page
    console.log("Page chargée");
}

// Récupère l'élément par son ID
function getId(id) {
    return document.getElementById(id);
}

// Affiche la fenêtre de dialogue avec l'ID spécifié
function afficherPopup(id) {
    return document.getElementById(id).showModal();
}

// Ferme la fenêtre de dialogue avec l'ID spécifié
function fermerPopup(id) {
    return document.getElementById(id).close();
}

//fonction pour choisir la bonne conversion
function fenêtreConvertion() {
    let choix = getId("conversionType");
    let valeur = choix.value;

    if (!valeur) {
        // Si aucune valeur n'est sélectionnée, on affiche une alerte
        alert("Veuillez choisir un type de convession.");
        return; // Stoppe la fonction si aucune valeur n'est sélectionnée
    } else {
        afficherPopup(valeur); // Affiche la fenêtre de dialogue sélectionné
    }
}

// Fonctions de conversion de degré celsius en fahrenheit 
function convCelEnFahr() {
    let valeur = parseFloat(getId("celsius").value);
    let reponse = (valeur * 9 / 5) + 32;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur valide.");
        return; // Stoppe la fonction si le champ est vide ou invalide
    } else if (valeur < -273.15) {
        alert("La température ne peut pas être inférieure au zéro absolu (-273.15 °C).");
        return; // Stoppe la fonction si la température est invalide
    } else {
        return getId("resultCelEnFahr").innerText = ` ${reponse.toFixed(2)} °F`;
    }
}

// Fonctions de conversion de degré celsius en kelvin  
function convCelEnKel() {
    let valeur = parseFloat(getId("celsius2").value);
    let reponse = valeur + 273.15;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur valide.");
        return; // Stoppe la fonction si le champ est vide ou invalide
    } else if (valeur < -273.15) {
        alert("La température ne peut pas être inférieure au zéro absolu (-273.15 °C).");
        return; // Stoppe la fonction si la température est invalide
    } else {
        return getId("resultCelEnKel").innerText = ` ${reponse.toFixed(2)} °K`;
    }
}

// Fonctions de conversion de degré fahrenheit en celsius
function convFahrEnCel() {
    let valeur = parseFloat(getId("fahrenheit").value);
    let reponse = (valeur - 32) * 5 / 9;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur valide.");
        return; // Stoppe la fonction si le champ est vide ou invalide
    } else if (valeur < -459.67) {
        alert("La température ne peut pas être inférieure au zéro absolu (-459.67 °F).");
        return; // Stoppe la fonction si la température est invalide
    } else {
        return getId("resultFahrEnCel").innerText = ` ${reponse.toFixed(2)} °C`;
    }
}

// Fonctions de conversion de degre celsius, fahrenheit et kelvin  
function convFahrEnKel() {
    let valeur = parseFloat(getId("fahrenheit2").value);
    let reponse = ((valeur - 32) * 5 / 9) + 273.15;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur valide.");
        return; // Stoppe la fonction si le champ est vide ou invalide
    } else if (valeur < -459.67) {
        alert("La température ne peut pas être inférieure au zéro absolu (-459.67 °F).");
        return; // Stoppe la fonction si la température est invalide
    } else {
        return getId("resultFahrEnKel").innerText = ` ${reponse.toFixed(2)} °K`;
    }
}

function convKelEnCel() {
    let valeur = parseFloat(getId("kelvin").value);
    let reponse = valeur - 273.15;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur valide.");
        return; // Stoppe la fonction si le champ est vide ou invalide
    } else if (valeur < 0) {
        alert("La température ne peut pas être inférieure au zéro absolu ( 0 °K).");
        return; // Stoppe la fonction si la température est invalide
    } else {
        return getId("resultKelEnCel").innerText = ` ${reponse.toFixed(2)} °C`;
    }
}

function convKelEnFahr() {
    let valeur = parseFloat(getId("kelvin2").value);
    let reponse = ((valeur - 273.15) * 9 / 5) + 32;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur valide.");
        return; // Stoppe la fonction si le champ est vide ou invalide
    } else if (valeur < 0) {
        alert("La température ne peut pas être inférieure au zéro absolu ( 0 °K).");
        return; // Stoppe la fonction si la température est invalide
    } else {
        return getId("resultKelEnFahr").innerText = ` ${reponse.toFixed(2)} °F`;
    }
}
