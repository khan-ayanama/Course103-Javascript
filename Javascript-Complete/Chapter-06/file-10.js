// let numbers = [1,2,3];
// How JS creates an array
// const number = new Array(1, 2, 3, 4);
// console.log(number);

// For easeness we use shortcut to create an array
number = [1, 2, 3, 4];

// Now we know Array is created by new keyword it means it has it's own prototype which has all the array properties like push, pop, concat etc.

// To Access the protype we can use
console.log(Object.getPrototypeOf(number));
console.log(Array.prototype);
