function init() {
  // Initialisation de la page
  console.log("Page chargée");
}

// Affiche la fenêtre de dialogue avec l'ID spécifié    
function afficherPopup(id) {
  return document.getElementById(id).showModal()
}

// Ferme la fenêtre de dialogue avec l'ID spécifié
function fermerPopup(id) {
  return document.getElementById(id).close()
}

// Récupère l'élément par son ID
function getId(id) {
  return document.getElementById(id);
}

function changePage(menu) {
  const lien = menu.value;
  if (lien) {
    window.location.href = lien;
  }
}

// Fonction pour choisir un projet à partir d'une liste déroulante
function choisirProjet() {
  // Elle affiche une fenêtre de dialogue correspondant au projet sélectionné
 
  const valeur = getId("projetSelect").value.trim();

  if (!valeur) {
    // Si aucune valeur n'est sélectionnée, on affiche une alerte
    alert("Veuillez choisir un projet.");
    return; // Stoppe la fonction si aucune valeur n'est sélectionnée
  }

 if (getId(valeur)) {
    afficherPopup(valeur); // Affiche la fenêtre de dialogue du projet sélectionné
    return
  } else {
    // Si le projet n'existe pas, on affiche une alerte
    alert("Projet non trouvé. Veuillez choisir un nom depuis la liste.");
  }
}
