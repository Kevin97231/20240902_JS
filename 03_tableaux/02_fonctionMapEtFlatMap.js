const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

// La fonction map()
// Permet de duppliquer un tableau en appliquant la même opération sur chacun des éléments du tableau que l'on dupplique

const newPersons = persons.map((person) =>
  [person.firstName, person.lastName].join(" ")
);

console.log(newPersons);

// Exercice : Faire une fonction qui
// - prend en paramètre un tableau
// - retourne un tableau contenant les carrés des valeurs du tableau passé en paramètre

// ==> Si j'ai [1,2,3,4] en entré --> je veux que la fonction retourne [1,4,9,16]

const chiffre = [1, 2, 3, 4];

const carre = (tableau) => {
  return tableau.map((number) => number * number);
};

console.log(carre(chiffre)); // [1, 4, 9, 16]

// La fonction flatMap()

let result = chiffre.map((number) => [[number * number]]);
console.log("result: ", result);

let result2 = chiffre.flatMap((number) => [[number * number]]);
console.log("result: ", result2);
