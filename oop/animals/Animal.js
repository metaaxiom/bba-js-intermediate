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

class Turtle extends Animal {
  constructor(individualName){
    super(individualName, "Turtle");
  }

  decelerate(){
    console.log(`${this.individualName} is moving even slower.`);
  }
}

let Franklin = new Turtle("Franklin");
Franklin.walk(); // Franklin is walking.
Franklin.decelerate(); // Franklin is moving even slower.

let Adam = new Turtle("Adam");

class AnimalList {
  constructor(){
    this.animalsArr = [];
  }

  add(animalObj){
    this.animalsArr.push(animalObj);
    // always sort after adding to arr
    this.animalsArr.sort((a, b) => {
      if(a.individualName > b.individualName){
        return 1;
      }
      return -1;
    });
  }

  remove(individualName){
    this.animalsArr = this.animalsArr.filter(animal => animal.individualName != individualName);
  }

  // method Print individualNames
  printAnimals(){
    this.animalsArr.forEach(animal => {
      console.log(animal.individualName);
    });
  }
}

let myAnimalList = new AnimalList(); // creates an empty AnimalList object
myAnimalList.add(Roger);
myAnimalList.add(Adam);
myAnimalList.add(Franklin);

myAnimalList.printAnimals();