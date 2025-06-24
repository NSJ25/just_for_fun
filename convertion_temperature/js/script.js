function init() {
    // Initialisation de la page
    console.log("Page chargée");
}

function getId(id) {
    // Récupère l'élément par son ID
    return document.getElementById(id);
}

function afficherPopup(id) {
    // Affiche la fenêtre de dialogue avec l'ID spécifié        
    return document.getElementById(id).showModal();
}

function fermerPopup(id) {
    // Ferme la fenêtre de dialogue avec l'ID spécifié
    return document.getElementById(id).close();
}

function fenêtreConvertion() {
    //fonction pour choisir la bonne conversion
    let choix = getId("conversionType");
    let valeur = choix.value;

    if (!valeur) {
        // Si aucune valeur n'est sélectionnée, on affiche une alerte
        alert("Veuillez choisir un projet.");
        return; // Stoppe la fonction si aucune valeur n'est sélectionnée
    } else {
      afficherPopup(valeur); // Affiche la fenêtre de dialogue sélectionné
    } 
}

function convCelEnFahr() {
    let valeur = parseFloat(getId("celsius").value);
    let reponse = (valeur * 9 / 5) + 32;
    if(valeur < -273.15) {
        alert("La température ne peut pas être inférieure au zéro absolu (-273.15 °C).");
        return; // Stoppe la fonction si la température est invalide
    } else{
            return getId("resultCelEnFahr").innerText = ` ${reponse.toFixed(2)} °F`;
        }
}

function convCelEnKel(){
    let valeur = parseFloat(getId("celsius2").value);
    let reponse = valeur + 273.15;
    if(valeur < -273.15) {
        alert("La température ne peut pas être inférieure au zéro absolu (-273.15 °C).");
        return; // Stoppe la fonction si la température est invalide
    } else{
            return getId("resultCelEnKel").innerText = ` ${reponse.toFixed(2)} °K`;
        }  
}

function convFahrEnCel() {
    let valeur = parseFloat(getId("fahrenheit").value);
    let reponse = (valeur - 32) * 5 / 9;
    if(valeur < -459.67) {
        alert("La température ne peut pas être inférieure au zéro absolu (-459.67 °F).");
        return; // Stoppe la fonction si la température est invalide
    } else{
            return getId("resultFahrEnCel").innerText = ` ${reponse.toFixed(2)} °C`;
        }
}

function convFahrEnKel() {
    let valeur = parseFloat(getId("fahrenheit2").value);
    let reponse = ((valeur - 32) * 5/9) + 273.15;
    if(valeur < -459.67) {
        alert("La température ne peut pas être inférieure au zéro absolu (-459.67 °F).");
        return; // Stoppe la fonction si la température est invalide
    } else{
            return getId("resultFahrEnKel").innerText = ` ${reponse.toFixed(2)} °K`;
        }
}

function convKelEnCel(){
    let valeur = parseFloat(getId("kelvin").value);
    let reponse = valeur - 273.15;
    if(valeur < 0) {
        alert("La température ne peut pas être inférieure au zéro absolu ( 0 °K).");
        return; // Stoppe la fonction si la température est invalide
    } else{
            return getId("resultKelEnCel").innerText = ` ${reponse.toFixed(2)} °C`;
        }
}

function convKelEnFahr(){
    let valeur = parseFloat(getId("kelvin2").value);
    let reponse = ((valeur - 273.15) * 9/5) +32;
    if(valeur < 0) {
        alert("La température ne peut pas être inférieure au zéro absolu ( 0 °K).");
        return; // Stoppe la fonction si la température est invalide
    } else{
            return getId("resultKelEnFahr").innerText = ` ${reponse.toFixed(2)} °F`;
        }
}

