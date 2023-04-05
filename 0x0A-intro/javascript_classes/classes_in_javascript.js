// Classes are one of the features introduced in the ES6 version of JavaScript.

// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.

// Since many houses can be made from the same description, we can create many objects from a class

// 0. class syntax

class MyClass {
    // class methods
    constructor(argument) {

     }

    method1() { }
    method2() { }
    method3() { }
    
  }

  // for example 


  class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);  // method1
    }
  
  }
  
  // Usage:
  let user = new User("John");   // call the class outside the class by assigning a value to a new variable using new--keyword
  user.sayHi();


//1. Creating JavaScript Class

// JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.

// The constructor function is defined as

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();


//2. Instead of using the function keyword, you use the class keyword for creating JS classes. For example;

// creating a class
class Person {
    constructor(name) {
      this.name = name;
    }
  }

  //3. The class keyword is used to create a class. The properties are assigned in a constructor function.

// Now you can create an object. For example,

// creating a class
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');
  
console.log(person1.name); // John
console.log(person2.name); // Jack