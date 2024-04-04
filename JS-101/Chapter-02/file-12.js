// Functions

// Function without parameters
function sayHello() {
  console.log("Hello!");
}

// Calling the function
sayHello(); // Output: Hello!

// Function with parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function with argument
greet("Boss"); // Output: Hello, Boss!

// Function with default parameter
function multiply(a, b = 2) {
  return a * b;
}

// Calling the function with one argument
let result1 = multiply(5); // Uses default value for b, so result1 = 5 * 2 = 10

// Calling the function with two arguments
let result2 = multiply(3, 4); // Explicitly setting b to 4, so result2 = 3 * 4 = 12

console.log(result1); // Output: 10
console.log(result2); // Output: 12

// Function with rest parameter
function sum(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

// Calling the function with multiple arguments
let totalSum = sum(1, 2, 3, 4, 5); // Adds all arguments together: 1 + 2 + 3 + 4 + 5 = 15

console.log(totalSum); // Output: 15

// Function Declaration
// This function adds two numbers
function add(a, b) {
  return a + b;
}

// Calling the function
let sum = add(3, 5); // Output: 8
console.log("Sum:", sum);

// Function Expression
// This function multiplies two numbers
let multiply = function (a, b) {
  return a * b;
};

// Calling the function
let product = multiply(4, 6); // Output: 24
console.log("Product:", product);
