function init() {
    // fonction qui s'execute au chargement de la page web
    console.log("Page chargée");
    afficherVersets();
}

function getId(id) {
    // fonction qui retourne l'element html avec l'id passé en paramètre
    return document.getElementById(id);
}

function afficherVersets() {
    // Récupérer tous les paragraphes contenu de la div avec id : #versets et retourne un tableau contenant ces paragraphes
    const versets = document.querySelectorAll("#versets p");

    // Sélectionner un paragraphe aléatoire
    const versetAleatoire = versets[Math.floor(Math.random() * versets.length)];
    console.log(versetAleatoire);
    // Afficher le contenu HTML du paragraphe sélectionné dans la div avec id : #afficheVers
    getId("afficheVers").innerHTML = versetAleatoire.innerHTML;
}