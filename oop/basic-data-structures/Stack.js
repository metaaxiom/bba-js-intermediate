class Stack {
  #stackArr = [];

  constructor(newElement){
    if(newElement != undefined){
      this.push(newElement);
    }
  }

  push(newElement){
    this.#stackArr.push(newElement);
  }

  pop(){
    return this.#stackArr.pop();
  }

  get peek(){
    return this.#stackArr[this.#stackArr.length-1];
  }
}

let Stack1 = new Stack();
Stack1.push("apple");
Stack1.push("orange");
Stack1.push("banana");
Stack1.push("pear");

let poppedElement1 = Stack1.pop();
console.log(poppedElement1);

let peekedElement1 = Stack1.peek;
console.log(peekedElement1);

let Stack2 = new Stack("tomato");
console.log(Stack2.peek);

// this is a private field, and can't be accessed
//console.log(Stack1.#stackArr[1]);





// console.log("******************************");

// class CoffeeMachine {
//   #waterAmount = 0;

//   constructor(power) {
//     this._power = power;
//   }

//   get waterLvl(){
//     return this.#waterAmount;
//   }

//   set waterLvl(newWaterLvl){
//     // don't allow a negative water lvl to be set
//     if (newWaterLvl < 0) {
//       this.#waterAmount = 0;
//     }else{
//       this.#waterAmount = newWaterLvl;
//     }
//   }

//   // set waterAmount(value) {
//   //   if (value < 0) {
//   //     value = 0;
//   //   }
//   //   this._waterAmount = value;
//   // }

//   // get waterAmount() {
//   //   return this._waterAmount;
//   // }

//   // get power() {
//   //   return this._power;
//   // }

// }

// let machine1 = new CoffeeMachine(100);
// // console.log( machine1.waterAmount );
// // machine1.waterAmount = 50;
// // console.log( machine1.waterAmount );
// // machine1.waterAmount = -50; // this doesn't work (default to 0 b/c of the setter)
// // console.log( machine1.waterAmount );

// // // this still works
// // machine1._waterAmount = -50;
// // console.log(machine1.waterAmount);

// // console.log( machine1.power );
// // machine1._power = 30;
// // console.log( machine1.power );

// //console.log( machine1.waterAmount );
// // console.log( machine1.#waterAmount );

// console.log( machine1.waterLvl );
// machine1.waterLvl = 25;
// console.log( machine1.waterLvl );
// machine1.waterLvl = -25;
// console.log( machine1.waterLvl );