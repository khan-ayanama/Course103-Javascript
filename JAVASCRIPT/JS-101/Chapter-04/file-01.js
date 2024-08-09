// Objects

// Creation of object
let user1 = new Object(); // Constructor syntax
let user2 = {}; // Literal syntax

// Accessing value of object
let user3 = {
  name: "Ayan",
  age: 21,
};

console.log(user3.name);

// Deleting property
console.log(user3);
delete user3.age;
console.log(user3);

// Multiword property: must be quoted
let user4 = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// Square bracket-> for multiword key dot notation doesn't work
console.log(user4["likes birds"]);

// Computed properties
let fruit = "apple";
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// Key can be string only

// You can't use variable in dot notation
let key = "name";
console.log(user4.key); // undefined
