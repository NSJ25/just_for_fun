function init() {
    // Initialisation de la page
    console.log("Page chargée");

    // Initialisationde de la fonction d'affchage du niveau de langue
    getId("fr").addEventListener("input", function () {
        niveauLangue("fr", "niveauFr");
    });

    getId("en").addEventListener("input", function () {
        niveauLangue("en", "niveauEn");
    });

    getId("li").addEventListener("input", function () {
        niveauLangue("li", "niveauLi");
    });
}

// fonction pour récupérer un élément par son ID
function getId(id) {
    return document.getElementById(id);
}

// fonction pour afficher le niveau de langue
function niveauLangue(a, b) {
    let niveau = getId(a).value;
    let message = getId(b);

    switch (parseInt(niveau)) {
        case 1: return message.innerText = "Débutant";
            break;
        case 2: return message.innerText = "Élémentaire";
            break;
        case 3: return message.innerText = "Intermédiaire";
            break;
        case 4: return message.innerText = "Correct";
            break;
        case 5: return message.innerText = "Avancé";
            break;
        case 6: return message.innerText = "Autonome";
            break;
        case 7: return message.innerText = "Maîtrise";
            break;
        default: return message.innerText = "Aucun";
    }
}

