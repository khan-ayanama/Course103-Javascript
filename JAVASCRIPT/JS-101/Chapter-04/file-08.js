// Symbol Type

let id1 = Symbol("id");
let id2 = Symbol("id");
let id3 = Symbol("id");

console.log(id1 == id2); // false
console.log(id1.toString());
console.log(id1.description);

// "hidden properties"
let user = { name: "Hopkins" };
let id = Symbol("id");
user[id] = 1;
console.log(user[id]);

// Global symbols
let userId = Symbol.for("Id");
let idAgain = Symbol.for("Id");
console.log(userId == idAgain);
