// Spread operator

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const copieNumbersOne = [...numbersOne];
console.log(copieNumbersOne);

const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// Destructuration
const cars = () => {
  return ["mustang", "f-150", "expedition"];
};

const cars2 = ["mustang", "f-150", "expedition"];

const [car1, car2, car3] = cars();

// Equivalent:
// const car1 = cars()[0];
// const car2 = cars()[1];
// const car3 = cars()[2];

let [car4, car5, car6] = cars2;

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

console.log("one", one);
console.log("two", two);
console.log("rest", rest);

const calculate = (a, b) => {
  const add = a + b;
  const substract = a - b;
  const divide = a / b;
  const multiply = a * b;

  return [add, substract, divide, multiply];
};

const [addition, soustraction] = calculate(8, 2);
console.log(addition, soustraction);

const [, , , division] = calculate(8, 2);

// Destructuration sur les objets

const person = { name: "John", age: 30, city: "New York" };

const { city, age, name } = person;
console.log(`name: ${name}, age: ${age}, city: ${city}`);

// Pour renommer pendant la destrucutraiton :
const { city: ville, age: âge, name: nom } = person;
console.log(`name: ${nom}, age: ${âge}, city: ${ville}`);

// copier un objet avec spread operator + { }
const copie = { ...person };
console.log(copie);

const personInfo = ({ name, age }) => {
  console.log("info perso: " + name + " " + age);
};

personInfo(person);
