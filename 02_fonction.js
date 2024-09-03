function helloName(name) {
  return name;
}

let name = helloName("Kevin");
console.log(name);
console.log(helloName("Kevin"));

const myTable = [12, 8, 14, 16];

console.log(moyenne(myTable));

function moyenne(tableau) {
  let x = 0;

  console.log(tableau.length);

  for (let i = 0; i < tableau.length; i++) {
    x += tableau[i];
  }

  let result = x / tableau.length;

  if (isNaN(result)) {
    return "Erreur, tableau vide ou un des items n'est pas un nombre";
  }

  return result;
}

// ____________________ Fonctions fléchées ____________________

const helloNameFlechee = (name) => {
  return name;
};

console.log("Fonction fléchée Name: ", helloNameFlechee("Kevin"));

const helloNameFlechee2 = (name) => name;
console.log("Fonction fléchée Name2: ", helloNameFlechee2("Kevin"));

const moyenneFlechee = (tableau) => {
  let x = 0;

  console.log(tableau.length);

  for (let i = 0; i < tableau.length; i++) {
    x += tableau[i];
  }

  let result = x / tableau.length;

  if (isNaN(result)) {
    return "Erreur, tableau vide ou un des items n'est pas un nombre";
  }

  return result;
};
console.log("Moyenne fléchée: ", moyenneFlechee(myTable));

const myNames = ["Riri", "Fifi", "Loulou"];

myNames.forEach((currentValue, index, arr) => {
  console.log(
    `valeur de l'item parcouru: ${currentValue}, index : ${index}, arr: ${arr}`
  );
});

let i = 0;
myNames.forEach(() => {
  console.log(i++);
});

myNames.forEach((item) => {
  console.log(item);
});
