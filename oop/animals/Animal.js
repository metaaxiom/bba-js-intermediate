class Animal {
  constructor(individualName, speciesName){
    this.individualName = individualName;
    this.speciesName = speciesName;
  }

  run(){
    console.log(`${this.individualName} is running.`);
  }
  walk(){
    console.log(`${this.individualName} is walking.`);
  }
}

let Franklin = new Animal("Franklin", "Turtle");
Franklin.walk(); // Franklin is walking.
Franklin.hop();

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