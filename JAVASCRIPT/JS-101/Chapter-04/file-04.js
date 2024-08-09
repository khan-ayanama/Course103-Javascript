// Object Refrences and copying
// A variable stores the address of an object not complete value like primitive type
// Two objects are equal only if they are the same.

// Duplicate of an object
let user = { name: "Horn", numer: 2 };
let clone = {};

// Using Object.assign(destinationObject,...sourceObject)

// Example:01
Object.assign(clone, user);
console.log(clone);

// Example:02
let obj1 = Object.assign({}, user);
console.log(obj1);

// Deep Cloning: structuredClone(object)
// When there is object inside object then the key stores reference that reference gets copied normally so use structuredClone for total cloning

let user2 = { name: "Jane", sizes: { height: 183, width: 50 } };

let user2Clone = structuredClone(user2);
console.log(user2Clone);
console.log(user2Clone.sizes === user2.sizes);

// structuredClone fails when there are functions in property
