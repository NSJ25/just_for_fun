function getId(id) {
    return document.getElementById(id);
}

//Fonction pour 
function changeTheme(btn) {
    // Variable pour recuperé la balise link
    const linkIndex = getId("theme");

    // 
    if (linkIndex.getAttribute("href") === "css/clair.css") {
        linkIndex.setAttribute("href", "css/dark.css");
        btn.innerText = 'Theme Clair';
    } else {
        linkIndex.setAttribute("href", "css/clair.css");
        btn.innerText = 'Theme Sombre';
    }
}

// Fonction pour 
function yum() {
    // Variable pour recuperé la balise link
    const linkProjets = getId('themeProjets');

    // 
    if (linkProjets.getAttribute("href") === "css/projets.css") {
        linkProjets.setAttribute("href", "css/projetsdark.css");
    } else {
        linkProjets.setAttribute("href", "css/projets.css");
    }
}

// Fonction pour 
function tom() {
    // Variable pour recuperé la balise link 
    const linkInfo = getId('themeInfos');

    // 
    if (linkInfo.getAttribute("href") === "css/info.css") {
        linkInfo.setAttribute("href", "css/infodark.css");
    } else {
        linkInfo.setAttribute("href", "css/info.css");
    }
}




