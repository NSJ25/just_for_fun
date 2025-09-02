function init() {
    // Initialisation de la page
    console.log("Page chargée");
}

// navigue vers la page dont le lien est passé en paramètre
function changePage(menu) {
    const lien = menu.value;
    if (lien) {
        window.location.href = lien;
    }
}

// Récupère l'élément par son ID
function getId(id) { 
    return document.getElementById(id);
}
 // Affiche le nom du visiteur en gras dans le message de bienvenue
function afficherNomVisiteur() {
    let nomVisiteur = getId("nomVisiteur").value;
    getId("afficherNom").innerText = nomVisiteur;
    getId("afficherNom").style.fontWeight = "bold";
    console.log("Nom du visiteur affiché :", nomVisiteur);
}






