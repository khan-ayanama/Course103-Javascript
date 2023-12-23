// Note: use const for creating an array so that reference can't be reassigned

// for loop in array
let fruits = ["apple", "mango", "grapes", "banana"];

let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// while loop in array
const fruits3 = ["apple", "mango", "grapes"];
const fruits4 = [];
let i = 0;
while (i < fruits.length) {
  fruits4.push(fruits3[i].toUpperCase());
  i++;
}
console.log(fruits4);

// for of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for in loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);
