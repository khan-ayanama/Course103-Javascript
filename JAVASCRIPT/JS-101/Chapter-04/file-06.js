// Constructor, operator "new"
// Constructor creates many similar object
// They can be created using 'new' operator.

// Constructor function
// named with capital letter first
// executed with new operator

// new operator
// 1. It creates an empty object and assigned to this
// 2. this is returned

// constructor mode test: new.target
// new.target checks whether constructor is called with new or without
// Example
function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
  this.isAdmin = false;
}

let user1 = new User("Jack");
console.log(user1);

// Return from constructor
// 1. If return is called with an object, then the object is returned instead of this
// 2. If returned with primitive it's ignored

// Omitting parenthesis
// Both of below are same
let user2 = new User();
let user3 = new User();

// Methods in constructor
function Student(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Your name is ${this.name}`);
  };
}

let John = new Student("John").sayHi();
