//1. Computed names […]

// Here’s an example with a computed method name using brackets [...]:

class User {

    ['say' + 'Hi']() {
      alert("Hello");
    }
  
  }
  
  new User().sayHi();