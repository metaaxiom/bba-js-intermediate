## 5/20

### Students OOP

Add a method to the Student constructor that will add a course to the courses array.

### Clothes OOP

Add a method to Clothes class which, substracts the discount value from item price and returns the result.





## 5/24

Create a new class called "Book" and give it properties that any book would have:

* Title (string)
* Author (string)
* Genre (string)
* Publisher (string)
* Year of publication (number)
* Amazon Rating (number)

Create getters and setters for all of these fields. Make sure to perform some basic validation within the setters (for example, the year of publication can only be a number, and cannot be negative).

### BONUS:

Create a new class called Library. Give it an array field which contains Book objects. Have the constructor accept an array of these Book objects as input.

Add a addBook setter to add more Book objects into the library.

Create a method which will print out all the book titles alphabeticlally.


## 5/25

Create a new class called Turtle that inherits from class Animal and provides some new properties / methods that are specific to turtles.

### BONUS

Create a class called AnimalList to which you can add Objects of the Animal type. Add a method called printAnimals to this class, which prints out all the animals in alphabetical order (based on the individualName).


## 5/26

* Divide all the classes that we wrote into individual files (then export / import them as modules).

* Write an implementation of the stack data structure using a class
  * class MyStack { ... }
  * push (already exists on array)
  * pop (already exists on array)
  * peek: method that retrieves the element at the top of the stack (without popping / removing it)

* Write an implementation of the queue data structure using a class
  * class MyQueue { ... }
  * queue: add element to the back
  * dequeue: remove an element from the front
  * peek: method that retrieves the element at the front of the queue (without dequeing it)