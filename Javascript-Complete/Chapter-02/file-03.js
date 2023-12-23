// primitve vs reference data types

// Primitive type
let num1 = 6;
let num2 = num1; // Here we're copying value not address
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

// reference types
// here changing the vlaue of one array changes the value in second array
let array1 = ["item1", "item2"];
let array2 = array1; // Here we're storing reference not copying value

console.log("array1", array1);
console.log("array2", array2);

array1.push("item3");

console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);
