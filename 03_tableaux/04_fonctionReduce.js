const myArray = [1, 2, 3, 4];

// Somme de tous les chiffres:
const SUM_AARAY = myArray.reduce(
  // Total -> Valeur qui sera retourné (total commun à tous les items)
  // currentValue -> Chaque valeur dans le tableau à chaque itération
  (total, currentValue) => total + currentValue,
  0

  //   0 -> Il s'agit de la valeur initiale du total
);

console.log(SUM_AARAY);

// Exo: Faire la somme de tous les éléments au carré

const SUM_AARAY_CARRE = myArray.reduce(
  (total, currentValue) => total + currentValue * currentValue,
  0
);
console.log(SUM_AARAY_CARRE);
