function init() {
  // Initialisation de la page
  console.log("Page chargée");
}

function afficherPopup(id) {
  // Affiche la fenêtre de dialogue avec l'ID spécifié        
  return document.getElementById(id).showModal()
}

function fermerPopup(id) {
  // Ferme la fenêtre de dialogue avec l'ID spécifié
  return document.getElementById(id).close()
}

function getId(id) {
  // Récupère l'élément par son ID
  return document.getElementById(id);
}

function changePage(menu){
  const lien = menu.value;
  if(lien){
   window.location.href = lien;
  } 
}

function choisirProjet() {
  // Fonction pour choisir un projet à partir d'une liste déroulante
  // Elle affiche une fenêtre de dialogue correspondant au projet sélectionné
  const choix = getId("projetSelect");
  const valeur = choix.value.trim().toLowerCase(); 
  
  if (!valeur) {
    // Si aucune valeur n'est sélectionnée, on affiche une alerte
    alert("Veuillez choisir un projet."); 
    return; // Stoppe la fonction si aucune valeur n'est sélectionnée
  }
  
  if (getId(valeur)) {
    afficherPopup(valeur); // Affiche la fenêtre de dialogue du projet sélectionné
  } else {
    // Si le projet n'existe pas, on affiche une alerte
    alert("Projet non trouvé. Veuillez choisir un nom depuis la liste.");
  }
}
