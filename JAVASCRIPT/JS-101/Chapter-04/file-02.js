// Property vlaue shorthand
// user1 and user2 gives similar result
// When key and value is same don't need to define keys
name = "Ayan";
age = 21;
let user1 = {
  name: name,
  age: age,
};

let user2 = {
  name,
  age,
};

//  there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
// Any types of key will be converted to strings

// We cannot assign __proto__ other than object like num etc
user1.__proto__ = {};
console.log(user1.__proto__);
