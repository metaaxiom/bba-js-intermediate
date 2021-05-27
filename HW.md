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


## 5/27

1. Watch tutorial and read the articles that I've sent over
2. Get comfortable with using the fetch JS function by making requests to the JSON Placeholder API (make sure to try calling both, GET and POST requests).
  * Make sure that you understand the underlying technology of fetch (promises)
    * Make sure you understand the precursor to promises (callbacks), and their drawbacks (callback)
      * This is explained in the Net Ninja Async JS playlist
3. Choose an easy-to-use crypto API from the GitHub public APIs list, and make an account with them (most of them will require an account). Using their docs, make a request to their server to retrieve some basic price information about a particular cryptocurrency. Accept queries from the user using an input box in HTML, and display the data on the page.
  * Try to make this page look nice. Potentially give it an about page (will require PHP).
4. Choose an API that stores information either about books, films, or any other similar media. Then, create a page where a user can search for a book or film by title, and then based on that input make a request to the API, and retrieve basic information about the piece of media on the page.
  * Create a class called Book or Film. Then, when you retrieve info about a particular piece of media from the API, create a new instance of the Book or Film object, and populate it with the relevant information (title, author, data of publication, summary, etc.).
  * Create a class called library (similar to the AnimalList class we wrote earlier), which will store a list of Books / Films, and provide methods for easily interfacing with this library (printBooksByTitle(), etc.).
5. Practice all the topics we've went over that are available on freeCodeCamp.org

BONUS: Implement a linked-list data structure.