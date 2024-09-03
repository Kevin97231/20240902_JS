let myArray = [];
const myNames = ["Riri", "Fifi", "Loulou"];
let myArray2 = new Array(5);

console.log(myArray, myNames, myArray2);

// Ajout d'élément
myArray.push("Toto");
myNames.push("Toto");
myArray2.push("Toto");

console.log("Après ajout de 'toto'", myArray, myNames, myArray2);

myNames.forEach((item) => console.log(item));

// Suppression d'élément
// 'splice()' => le premier paramètre sera l'index du premier élément à supprimer
//   =>  le second paramètre sera le nombre d'éléments que l'on souhate supprimer

myArray.splice(1, 1);
myNames.splice(1, 1);
myArray2.splice(1, 1);

console.log(
  "Après suppression avec 'splice(1,1): ",
  myArray,
  myNames,
  myArray2
);

// Boucle for of
for (element of myNames) {
  console.log(element);
}
