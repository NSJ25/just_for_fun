function init() {
    // Initialisation de la page
    console.log("Page chargée");
}

function getId(id) {
    // Récupère l'élément par son ID
    return document.getElementById(id);
}

function celEnFahr() {
    let reponse = (getId("celsiusInput").value.trim() * 9 / 5) + 32;
    return getId("resultat").innerHTML = `La température en Fahrenheit est : ${reponse} °F`;
}