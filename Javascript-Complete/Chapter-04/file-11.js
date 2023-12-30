// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects
// objects can only have string or symbol
// as key
// in maps you can use anything as key
// like array, number, string

// Example of Object Literal:
// Object literal
// key -> string
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// Object with Map
// key value pair
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
  id: 1,
  firstName: "harshit",
};
const person2 = {
  id: 2,
  firstName: "harshta",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
extraInfo.set(person2, { age: 9, gender: "female" });
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

// Map methods
// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("isStudent", false);

// Getting values from the Map
console.log(myMap.get("name")); // Output: John

// Checking if a key is in the Map
console.log(myMap.has("age")); // Output: true

// Deleting a key-value pair from the Map
myMap.delete("isStudent");

// Iterating over the Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Clearing all key-value pairs from the Map
myMap.clear();
