// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(person);

// how to access data from objects
console.log(person["name"]);
console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person);

// difference between dot and bracket notaion
const key = "email";

// You can't access person hobbies with dot notation
console.log(person["person hobbies"]);
person[key] = "harshitvashisth@gmail.com";
console.log(person);
