import {Animal} from './Animal.js';
import unnamed from './unnamed.js';

console.log("unnamed string says:", unnamed);

// C:\xampp\htdocs\bba-js-intermediate\oop\animals\Rabbit.js
// C:\xampp\htdocs\bba-js-intermediate\oop\animals\Animal.js

// Rabbit extends (inherits from) Animal
// Rabbit is therefore a child class of Animal
class Rabbit extends Animal {
  constructor(individualName){
    // super() calls the constructor of the parent class (Animal)
    super(individualName, "rabbit");
  }

  hop(){
    console.log(`${this.individualName} is hopping.`);
  }
}

let Roger = new Rabbit("Roger");
Roger.run(); // Roger is running.
Roger.hop(); // Roger is hopping.