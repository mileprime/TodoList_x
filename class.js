/**
 * prototype make it available through
 * every instance
 */

class person {
  constructor(name) {
    this.name = name;
  }
}
person.prototype.eat = function () {
  return "food!";
};

let person1 = new person("Ahmed");
let person2 = new person("Ali");
person1.greet = function () {
  return "Hi Ahmed!";
};
person2.greet = function () {
  return "Hi Ali!";
};
console.log(person1.greet(), person2.greet());

/**
 * use function outside class
 */

// class person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// person.greet = function () {
//   return "Hiiiii";
// };
// let person1 = new person("Ahmed");
// console.log(person1);

/**
 * extends class
 */

// class Animal {
//   constructor(x) {
//     this.name = x;
//   }
//   eat() {
//     return this.name + "is eating...";
//   }
// }

// class Dog extends Animal {
//   bark() {
//     return this.name + "is barking...";
//   }
// }

// let myDog = new Dog("Bobi");
// console.log(myDog.eat());
// console.log(myDog.bark());

/**
 * class constructor attribute this.
 * get method (){}
 */

// class car {
//   constructor(color) {
//     this.color = color;
//     this.modal = "563hhd";
//   }
//   getCarColor() {
//     return this.modal;
//   }
// }

// let car = {
//   color: "red",
//   getcarColor: () => {}, //error
// };

// let car1 = new car("red");
// console.log(car1.getCarColor());
