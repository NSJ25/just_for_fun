function init() {
    console.log("Page Chargée");
}

// Fonction affiche la popup
function ajouterPopup(id) {
    return document.getElementById(id).showModal();
}

// Fonction ferme la popup
function fermerPopup(id) {
    return document.getElementById(id).close();
}

// Fonction pour ajouter un chiffre ou un opérateur à l'écran
function ajouterChiffre(caractere) {
    document.getElementById("ecran").value += caractere;
}

// fonction pour effacer l'écran
function clearCalculatrice() {
    document.getElementById("ecran").value = "";
}

//Fonction pour supprime le dernier caractère de l'écran
function backspace() {
    let ecran = document.getElementById("ecran");
    ecran.value = ecran.value.slice(0, -1);
}

// Fonction pour ajouter un opérateur à l'écran avec gestion des erreurs
function ajouterOperateur(operateur) {
    // Récupère l'écran et le message d'erreur
    let ecran = document.getElementById("ecran");
    let errorMessage = document.getElementById("message");

    // Récupère le dernier caractère de l'écran
    let dernierCaractere = ecran.value.slice(-1);

    // Liste des opérateurs
    let operateurs = ['+', '-', '/', '.'];

    // Vérifie les erreurs avant d'ajouter l'opérateur
    if (ecran.value === '') {
        switch (operateur) {
            case '+':
                errorMessage.innerText = "Erreur : L'expression ne peut pas commencer par l'opérateur d'addition.";
                ajouterPopup('error');
                return;
            case '*':
                errorMessage.innerText = "Erreur : L'expression ne peut pas commencer par l'opérateur de la multiplication.";
                ajouterPopup('error');
                return;
            case '/':
                errorMessage.innerText = "Erreur : L'expression ne peut pas commencer par l'opérateur de la division.";
                ajouterPopup('error');
                return;
            case '.':
                errorMessage.innerText = "Erreur : L'expression ne peut pas commencer par une virgule.";
                ajouterPopup('error');
                return;
            case '-':
                // ✅ Autoriser le signe - en début pour les nombres négatifs
                ecran.value += operateur;
                return;
            default:
                errorMessage.innerText = "Erreur : L'expression ne peut pas commencer par un opérateur.";
                ajouterPopup('error');
                return;
        }
        //  cas où le dernier caractère est un opérateur identique à celui qu'on veut ajouter
    } else if (operateurs.includes(dernierCaractere) && dernierCaractere === operateur) {
        errorMessage.innerText = "Erreur : Deux opérateurs identiques consécutifs ne sont pas autorisés.";
        ajouterPopup('error');
        return;
        // cas où le dernier caractère est un opérateur différent de celui qu'on veut ajouter
    } else if (operateurs.includes(dernierCaractere) && dernierCaractere !== operateur) {
        errorMessage.innerText = "Erreur : Deux opérateurs consécutifs ne sont pas autorisés.";
        ajouterPopup('error');
        return;
    }

    // Tout est correct, ajoute l'opérateur
    ecran.value += operateur;
}

// Fonction pour calculer le résultat
function calculer() {
    // Récupère l'écran et le message d'erreur
    let ecran = document.getElementById("ecran");
    let errorMessage = document.getElementById("message");

    // Évalue l'expression dans l'écran
    let resultat = eval(ecran.value);
    
    // Gère les erreurs
    if (!ecran.value) {
        errorMessage.innerText = "Erreur : Le champ est vide.";
        ajouterPopup('error');
        resultat = ''; // Réinitialise le résultat pour éviter d'afficher "undefined"
        return ecran.value;
        // Cas où l'expression se termine par un opérateur ou une virgule 
    } else if (isNaN(resultat) || resultat === undefined) {
        errorMessage.innerText = "Erreur : Expression invalide.";
        ajouterPopup('error');
        resultat = ''; // Réinitialise le résultat pour éviter d'afficher "NaN"
        return ecran.value;
        // Cas où le résultat est infini (division par zéro)    
    } else if (!isFinite(resultat)) {
        errorMessage.innerText = "Erreur : Division par zéro.";
        ajouterPopup('error');
        resultat = ''; // Réinitialise le résultat pour éviter d'afficher "Infinity"
        return ecran.value;
    }

    // Affiche le résultat
    return ecran.value = resultat;
}
