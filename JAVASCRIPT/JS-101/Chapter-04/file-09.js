// Object to Prmitive conversion
// If we want to add objects first objects will be converted to the primitives.

// Conversion rules
// All objects are true in boolean context.
// Numeric conversion happens when we apply mathematical functions
// String conversion happens when we output an object

// Object --> STRING
const obj1 = { 1: "one" };
alert(obj1);

const obj2 = {};
obj2[obj1] = 123;
console.log(obj2);

// Object --> Number

const obj3 = { name: "John" };
let num1 = Number(obj3);
let num2 = +obj3;
let greater = obj1 > obj2;
console.log(num);
