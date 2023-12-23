// intro to arrays
// reference type --> Stores Address

// how to create arrays
// ordered collection of items

// string type
let fruits = ["apple", "mango", "grapes"];

// number type
let numbers = [1, 2, 3, 4];
console.log(numbers);

// NO specific type
let mixed = [1, 2, 2.3, "string", null, undefined];
console.log(fruits[2]);

let obj = {}; // object literal

// Redeclare value inside an array fruit
fruits[1] = "banana";
console.log(fruits);

// type of an array and obj is same which is object
console.log(typeof fruits);
console.log(typeof obj);

// If you want to be sure about array
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));
