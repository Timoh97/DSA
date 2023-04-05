//1. Class fields are a recent addition to the language.

// Previously, our classes only had methods.

// “Class fields” is a syntax that allows to add any properties.

// For instance, let’s add name property to class User

class User {
    name = "John";   // So, we just write " = " in the declaration, and that’s it.
  
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
  }
  
  new User().sayHi(); // Hello, John

// The important difference of class fields is that they are set on individual objects, not User.prototype:

class User {
    name = "John";
  }
  
  let user = new User();
  alert(user.name); // John
  alert(User.prototype.name); // undefined

  // We can also assign values using more complex expressions and function call

  class User {
    name = prompt("Name, please?", "John");
  }
  
  let user1 = new User();
  alert(user1.name); // John


//2. Making bound methods with class fields
// As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.

// So if an object method is passed around and called in another context, this won’t be a reference to its object any more.

// For instance, this code will show undefined:

class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // undefined



  // The problem is called "losing this".

// There are two approaches to fixing it, as discussed in the chapter Function binding:

// Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
// Bind the method to object, e.g. in the constructor.
// Class fields provide another, quite elegant syntax:

class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button1 = new Button("hello");
  
  setTimeout(button1.click, 1000); // hello


  //3. SUMMARY
  //class syntax is as below

  class MyClass {
    prop = value; // property
  
    constructor(  ) { // constructor
      // ...
    }
  
    method(  ) {} // method
  
    get something(  ) {} // getter method
    // set sth(  ) {} // setter method
  
    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
  }

