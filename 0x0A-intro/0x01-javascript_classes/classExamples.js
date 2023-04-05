//1. CONSTRUCTOR METHOD

// Use the keyword class to create a class.

// Always add a constructor() method

// Then add any number of methods.

class ClassName {
    constructor() {    

      }


    method_1() {      }
    method_2() {      }
    method_3() {      }
  }








  //2. Create a Class method named "age", that returns the Car age:

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";








  //3. You can send parameters to Class methods

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  const date = new Date();
  let year = date.getFullYear();
  
  const myCar1 = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML=
  "My car is " + myCar1.age(year) + " years old.";



  