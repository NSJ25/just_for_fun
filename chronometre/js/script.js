function init() {
    console.log("Page Chargée");
}

// Récupération des éléments HTML via leur ID
function getId(id) {
    return document.getElementById(id);
}

// Variables globales
let secondes = 0;
let minutes = 0;
let heures = 0;
let interval = null;
let statut = false;

// Mise à jour de l'affichage
function formatTime(valeur) {
    if (valeur < 10) {
        return "0" + valeur;
    } else {
        return valeur;
    }
}


// Fonction pour créer le chronomètre
function chrono() {
    // Incrémentation du temps
    secondes++;
    if (secondes == 60) {
        secondes = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            heures++;
        }
    }
    // Formatage du temps pour l'affichage
    let h = formatTime(heures);
    let m = formatTime(minutes);
    let s = formatTime(secondes);

    // Mise à jour de l'affichage
    getId("display").innerText = `${h} : ${m} : ${s}`;
}

// Fonction pour démarrer/arrêter le chronomètre
function start() {
    if (!statut) {
        interval = setInterval(chrono, 1000);
        statut = true;
        getId("startStop").innerText = "Pause";
        getId("startStop").style.backgroundColor = "red";
    } else {
        clearInterval(interval);
        statut = false;
        getId("startStop").innerText = "Start";
        getId("startStop").style.backgroundColor = "#00ff00";
    }
}

// Fonction pour réinitialiser le chronomètre
function reset() {
    clearInterval(interval);
    secondes = 0;
    minutes = 0;
    heures = 0;
    statut = false;
    getId("display").innerText = "00 : 00 : 00";
    getId("startStop").innerText = "Start";
    getId("startStop").style.backgroundColor = "#00ff00";
}

// Deuxiéme partie : Minutereur
// Variables globales pour le minuteur
let heuresM = 0;
let minutesM = 0;
let secondesM = 0;
let intervalM = null;
let statutM = false;

// Décrémentation du minuteur
function compteARebours() {
    if (secondesM == 0 && minutesM == 0 && heuresM == 0) {
        clearInterval(intervalM);
        statutM = false;
        getId("startStopMinuteur").innerText = "Start";
        getId("startStopMinuteur").style.backgroundColor = "#00ff00";
        getId("endMessage").innerText = "⏰ Temps écoulé !";
        return;
    }

    if (secondesM == 0) {
        if (minutesM == 0) {
            if (heuresM > 0) {
                heuresM--;
                minutesM = 59;
                secondesM = 59;
            }
        } else {
            minutesM--;
            secondesM = 59;
        }
    } else {
        secondesM--;
    }

    // Mise à jour de l'affichage
    let h = formatTime(heuresM);
    let m = formatTime(minutesM);
    let s = formatTime(secondesM);

    getId("displayMinuteur").innerText = `${h} : ${m} : ${s}`;
}

// Start / Pause du minuteur
function startMinuteur() {
    if (!statutM) {
        // Si minuteur jamais lancé → on récupère les valeurs des inputs
        if (heuresM === 0 && minutesM === 0 && secondesM === 0) {
            heuresM = parseInt(getId("heures").value);
            minutesM = parseInt(getId("minutes").value);
            secondesM = parseInt(getId("secondes").value);
        }

        intervalM = setInterval(compteARebours, 1000);
        statutM = true;
        getId("startStopMinuteur").innerText = "Pause";
        getId("startStopMinuteur").style.backgroundColor = "red";
    } else {
        clearInterval(intervalM);
        statutM = false;
        getId("startStopMinuteur").innerText = "Start";
        getId("startStopMinuteur").style.backgroundColor = "#00ff00";
    }
}

// Reset du minuteur
function resetMinuteur() {
    clearInterval(intervalM);
    statutM = false;
    heuresM = 0;
    minutesM = 0;
    secondesM = 0;
    getId("displayMinuteur").innerText = "00 : 00 : 00";
    getId("endMessage").innerText = '';
}
