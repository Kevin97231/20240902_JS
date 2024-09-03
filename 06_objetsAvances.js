function Player(name, age) {
  this.name = name;
  this.age = age;
}

const player1 = new Player("Kumar", 31);
const player2 = new Player("Bob", 29);

console.log(player1);

const team = {
  name: "Red team",
  players: [player1, player2],

  addPlayer: function (player) {
    this.players.push(player);
  },

  displayTeam: function () {
    console.log(this.name);
    this.players.forEach((player, index) =>
      console.log(`player${index + 1} : ${player.name}`)
    );
  },
};

team.displayTeam();
team.addPlayer(new Player("Raj", 32));
team.displayTeam();

// Héritage
class Car {
  constructor(name) {
    this.name = name;
  }

  present() {
    return "I have a " + this.name;
  }
}

class Model extends Car {
  constructor(name, model) {
    // super() appelle le constructeur du parent (dans notre cas: 'Car')
    super(name);
    this.model = model;
  }

  show() {
    return this.present() + ", it's a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());
console.log(myCar.present());
console.log(myCar.name);

//  Encapsulation
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.name = name;
    this.age = age;

    // Si je ne veux pas passer par mes setters, j'utilise les '#' :
    // this.#name = name;
    // this.#age = age;
  }

  hello() {
    return `My name is ${this.#name}. I'm ${this.#age} yo`;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge > 17 && newAge < 99 && typeof newAge === "number") {
      this.#age = newAge;
    } else {
      console.error(
        " l'âge doit être compris entre 18 et 98ans. Vous avez entré: " + newAge
      );
    }
  }
}

let person = new Person("Alice", 110);

console.log("name de person", person.name);
console.log("age de person", person.age);

person.age = 18;
console.log(person.age);
// On peut rajouter des propriétés aux objets créés :
// person.city = "New York";
// console.log(person);

class Ninja extends Person {
  #speciality;

  constructor(name, age, speciality) {
    super(name, age);
    this.#speciality = speciality;
  }

  get speciality() {
    return this.#speciality;
  }

  hello() {
    return `Hello, my name is ${this.name}. I'm ${this.age} and my speciality is ${this.speciality}`;
  }
}

const user1 = new Person("Alice", 25);

// console.log("name -> ", user1.name);

// user1.name = "Alicia";
// console.log(user1.name);

// user1.age = "105";
// console.log(user1.age);

console.log(user1.hello());
const ninja = new Ninja("Bruce", 22, "Karate");

console.log(ninja.hello());
