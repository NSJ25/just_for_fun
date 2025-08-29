function init() {
    // Initialisation de la page
    console.log("Page chargée");
}

function changePage(menu) {
    // navigue vers la page dont le lien est passé en paramètre
    const lien = menu.value;
    if (lien) {
        window.location.href = lien;
    }
}

function getId(id) {
    // Récupère l'élément par son ID
    // Utilisé pour simplifier l'accès aux éléments du DOM
    return document.getElementById(id);
}

function afficherNomVisiteur() {
    // Affiche le nom du visiteur en gras dans le message de bienvenue
    let nomVisiteur = getId("nomVisiteur").value;
    getId("afficherNom").innerText = nomVisiteur;
    getId("afficherNom").style.fontWeight = "bold";
    console.log("Nom du visiteur affiché :", nomVisiteur);
}

const boutonTheme = getId('boutonTheme');
const themeClair = getId('themeClair');
const themeSombre = getId('themeSombre');

function changeTheme() {
    // Change la feuille de style au clique du bouton 
    // Il active ou désactive les thèmes clair et sombre grace à leurs attributs disabled
    const clairActif = !themeSombre.disabled;

    if (clairActif) {
        themeClair.disabled = false;
        themeSombre.disabled = true;
    } else {
        themeClair.disabled = true;
        themeSombre.disabled = false;
    }
}


