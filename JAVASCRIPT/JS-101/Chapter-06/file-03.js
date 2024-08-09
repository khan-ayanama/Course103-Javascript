// VAR

// var has no block scope
if (true) {
  var test = "Hello";
}
console.log(test);

// If var is inside function it becoms a function-level variable
function sayHi() {
  console.log("HELLO FORM SY HI!!");
  var nameA = "Ayan";
}
sayHi();
// console.log(nameA); // ReferenceError: nameA is not defined

// var tolerates redeclaration
// let user;
// let user;   // SyntaxError: 'user' has already been declared

var user;
var user;

// var variables can be declared below their use
console.log(variable1); // undefined
var variable1 = "Khan";

// IIFE
(function greet() {
  console.log("Welcome! and have fun");
})();
