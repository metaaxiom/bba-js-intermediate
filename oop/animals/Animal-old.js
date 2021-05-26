export class Animal {
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

/*
let Franklin = new Animal("Franklin", "Turtle");
Franklin.walk(); // Franklin is walking.
Franklin.hop();
*/