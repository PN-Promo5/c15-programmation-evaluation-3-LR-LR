// Exercice 1
// 1.1
function displayInterface() {
  // elements of the interface
  // title
  let title = document.createElement("h1");
  title.innerHTML = "Cinéma Le Dauphin";

  // paragraph
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, desrencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)."

  // button
  let button = document.createElement("button");
  button.innerHTML = "Voir les films à l'affiche cette semaine";

  // add elements into the HTML's body
  document.body.appendChild(title);
  document.body.appendChild(paragraph);
  document.body.appendChild(button);

  // 1.4
  // "click" event on the button
  button.addEventListener("click", function(){
    // hide the interface
    title.style.display="none";
    paragraph.style.display="none";
    button.style.display="none";

    // display the table
    document.body.appendChild(createHTMLTable(films));
  }, false);
}

displayInterface();

// 1.2
// array that contains the films
let films = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", 2019, "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", 2018, "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", 2018, "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", 2018, "1h06", "vostfr"]
];


// 1.3
// function that create the HTML table from an array
function createHTMLTable(array){
  // Table
  let table = document.createElement("table");

  let i = 0, j; // intermediates variables for the enumeration
  let currentElementI, currentElementJ; // intermediates variables for the sequentials treatments

  // table's header
  let thead = document.createElement("thead");
  // table's first row
  let tr = document.createElement("tr");

  // fill the table's header
  while (i < array[0].length) {
    currentElementI = array[0][i];
    i++;

    // elements of the table's header
    let th = document.createElement("th");
    th.innerHTML = currentElementI;
    tr.appendChild(th);
  }
  thead.appendChild(tr); // add the row into the header
  table.appendChild(thead); // add the header into the table


  // table's body
  let tbody = document.createElement("tbody");
  i = 1;

  // fill the table's body
  while (i < array.length) {
    currentElementI = array[i];
    i++;

    // rows of the table's body
    let tr = document.createElement("tr");
    j = 0;

    // fill every row of the table body
    while (j < currentElementI.length){
      currentElementJ = currentElementI[j];
      j++;

      // elements of the table body
      let td = document.createElement("td");
      td.innerHTML = currentElementJ;
      tr.appendChild(td);
    }
    tbody.appendChild(tr); // add the row into the the table's body
  }
  table.appendChild(tbody); // add the body into the table
  return table; // return the table
}

// 1.4 : see line 22


// Exercice 2
// 2.1
// array tha contains the substances informations
let substancesInformations = [
  ["SUBSTANCES", "Température de fusion ou solidication en °C", "Température d'ébullition en °C"],
  ["acide acétique", 17, 118],
  ["acide nitrique", -41, 86],
  ["acide sulfurique", 10, 290],
  ["alcool éthylique", -114, 78],
  ["aluminium", 660, 2450]
];

// 2.2
// function that returns an array that contains the name of the substances which the boiling temperature in °C is less than the number passed in parameter
function returnSubtances(array, temperature){
  // array that will contains the name of the substances which the boiling temperature in °C is less than the number passed in parameter
  let substancesArray = [];

  let i = 1; // intermediate variable for the enumeration
  let currentElement; // intermediate variable for the sequential treatment

  // fill the substancesArray with the good substances
  while (i < array.length) {
    currentElement = array[i];
    i++;

    if (currentElement[2] < temperature) { // if the boiling temperature is less than the temperature passed in parameter
      substancesArray.push(currentElement[0]); // add the name of the substances in the substancesArray
    }
  }

  // return the substancesArray
  return substancesArray;
}
