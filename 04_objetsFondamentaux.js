class Car {
  // En JS, on n'est pas obligé de réécrire nos attibuts si ils sont mappés dans le constructeur
  //   name;
  //   year;

  // fonction par laquelle on passe pour créer l'objet
  constructor(name, year) {
    if (name == undefined || year === undefined) {
      throw new Error(
        "Les propriétés 'name' et 'year' doivent être définies !"
      );
    }
    this.name = name;
    this.year = year;
  }

  myToString() {
    return `${this.name}, année: ${this.year}`;
  }
}

let car = new Car("Peugeot", 2016);

console.log(car);
console.log(car.myToString());

// Erreur ! on doit instancié un objet pour utiliser notre 'myToString'
// let test = Car.myToString();
// console.log(test);

const createCar = (name, year) => {
  try {
    return new Car(name, year);
  } catch (error) {
    console.error(error.message);
  }
};

let car2 = createCar("Renault");
let car3 = createCar("Citroen", 2012);

console.log("car2", car2);
console.log("car3", car3);

//  Accès proriétés:
const nameCar = car.name;
const yearCar = car.year;

const nameCar3 = car3["name"];
const yearCar3 = car3["year"];

console.log(` Voiture 1 -> { nom: ${nameCar}, annee: ${yearCar} } `);
console.log(` Voiture 2 -> { nom: ${nameCar3}, annee: ${yearCar3} } `);

// copie d'objets

// A EVITER !!! On ne doit pas copier d'objets de cette façon la !
const car4 = car;
// --------------------------------------------------------------

console.log(`car = ${car.name} et car4 = ${car4.name}`);

// car4.name ==> "Peugeot";
// car.name ==> "Peugeot";

car4.name = "Test";
// car4.name ==> "Test";
// car.name ==> "Test";
console.log(`car = ${car.name} et car4 = ${car3.name}`);

// Copie 'propre' avec Object.assign():
// const car5 = Object.assign({}, car3);
// Copie 'propre' avec spread operator:
const car5 = { ...car3 };

console.log(car5);
car5.name = "TEST";

console.log(car5.name);
console.log(car3.name);
