function init() {
    // Initialisation de la page
    console.log("Page chargée");
}

function afficherPopup(id) {
    // Affiche la fenetre de dialogue avec l'ID spécifié
    return document.getElementById(id).showModal()
}

function fermerPopup(id) {
    // Ferme la fenetre de dialogue avec l'ID spécifié
    return document.getElementById(id).close()
}
