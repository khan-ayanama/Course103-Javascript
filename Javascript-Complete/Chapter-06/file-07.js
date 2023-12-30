// new Keyword
// When we create an object using new keyword:
// 1. It creates an empty object: {}
// 2. It sets the value of this to the empty object: this={}
// 3. It sets the __proto__ of this object to the prototype of function
// You don't need to do like this: Objec.create(createUser.prototype) to set the prototype as __proto__
// 4. And at last it automatically returns the object
// These four steps done automaticaly

// Example

function createUser(name, age) {
  this.name = name;
  this.age = age;
}
createUser.prototype.about = function () {
  return `Name: ${this.name} and Age: ${this.age}`;
};

const user = new createUser("Ayan", 11);
console.log(user);
console.log(user.about());
