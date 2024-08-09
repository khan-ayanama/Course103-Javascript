// Function Object
// In JS functions are object.

// name property
function sayHI() {
  console.log("HELLO! Man");
}

console.log(sayHI.name); // sayHi

// length property
// returns the number of function parameters
function f2(a, b) {}
console.log(f2.length); // 2

// custom properties
function f3() {
  console.log("f3");
}
sayHI.counter = 0;
