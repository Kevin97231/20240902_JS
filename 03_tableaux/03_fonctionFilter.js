const words = ["spray", "elite", "exuberant", "destruction", "present"];

const WORDS_FILTER = words.filter((word) => {
  // Mon filtre est : "word.length > 6;"
  return word.length > 6;
});

const WORDS_FILTER2 = words.filter((word) => word.length > 6);

console.log(WORDS_FILTER);
console.log(WORDS_FILTER2);

const textFilter = (entreeUtilisateur) => {
  return words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);
};

console.log(textFilter("es"));
