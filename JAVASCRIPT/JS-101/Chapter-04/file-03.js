// 'in' Operator
// Reading a non-existing property returns 'undefined'

// Syntax
// "key" in object;

let user1 = {
  name: "John",
  age: 30,
};

console.log("name" in user1); // true

let key = "age";
console.log(key in user1);

// "for..in" loop
let user2 = {
  name: "Jane",
  age: 22,
  isAdmin: true,
};

for (let key in user2) {
  console.log(user2[key]);
}

// Note: Math.trunc -> It removes decimal parts
console.log(Math.trunc(2.234));
