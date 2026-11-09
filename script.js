const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};

const listeAteliers = document.getElementById("liste-ateliers");
const listeModes = document.getElementById("liste-modes");
const listeCampus = document.getElementById("liste-campus");


function afficher() {
  config.ateliers.forEach(atelier => {

    const carte = document.createElement("template");
    carte.classList.add("carte-choix");


    const label = document.createElement("label");
    label.textContent = "";
    carte.appendChild(label);

    const radio = document.createElement("input")
    radio.name = "atelier"
    radio.type = "radio";
    radio.classList.add("input");
    carte.appendChild(radio);

    const titreDetail = document.createElement("span")


    const titre = document.createElement("strong");
    titre.textContent = atelier.titre;
    titreDetail.appendChild(titre);

    const detail = document.createElement("span");
    detail.classList.add("detail");
    detail.textContent = atelier.places + " places disponible";
    if (atelier.places == 0) {
      return;
    }
    titreDetail.appendChild(detail);

    carte.appendChild(titreDetail);

    listeAteliers.appendChild(carte);
  });

  const carteTwo = document.createElement("template");
  carteTwo.classList.add("carte-choix");

  const labelMode = document.createElement("label");
  labelMode.textContent = "";
  carteTwo.appendChild(labelMode);

  const radioMode = document.createElement("input")
  radioMode.name = "atelier"
  radioMode.type = "radio";
  carteTwo.appendChild(radioMode);

  const mode = document.createElement("strong");
  mode.textContent = "En présentiel";
  carteTwo.appendChild(mode);

  //////////////////////////////////////////////////////////////////////
  
  const secondMode = document.createElement("label");
  secondMode.textContent = "";
  carteTwo.appendChild(secondMode);

  const secondRadio = document.createElement("input");
  secondRadio.name = "atelier"
  secondRadio.type = "radio";
  carteTwo.appendChild(secondRadio);

  const modeTwo = document.createElement("strong");
  modeTwo.textContent = "A distance";
  carteTwo.appendChild(modeTwo);

  listeModes.appendChild(carteTwo);


  /////////////////////////////////////////////////////////////////////////////

  config.campus.forEach(cam => {

    const campus = document.createElement("template");
    campus.classList.add("carte-choix");

    const camplabel = document.createElement("label");
    camplabel.textContent = "";
    campus.appendChild(camplabel);

    const radioMode = document.createElement("input")
    radioMode.name = "atelier";
    radioMode.type = "radio";
    campus.appendChild(radioMode);

    const campu = document.createElement("strong");
    campu.textContent = cam;
    campus.appendChild(campu);

    listeCampus.appendChild(campu);
  });

}
afficher();
