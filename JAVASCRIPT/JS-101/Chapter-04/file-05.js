// Garbage collection
// JS cleans the values which are not reachable inside of program

// Object methods

let user = {
  name: "John",
  age: 30,
};

// Method example
user.sayHi = function () {
  console.log("HI!!");
};

// Method shorthand
let user2 = {
  sayHi: function () {
    console.log("HELLO SHORT");
  },
};
user2.sayHi();

// Arrow functions doesn't have "this"
