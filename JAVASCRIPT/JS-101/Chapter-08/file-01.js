// Prototypal inheritance
// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

// [[Prototype]]: objects have special hidden object which is either null or reference of another object.

// On way to set [[Prototype]] is using __proto__
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
console.log(rabbit.eats); // true

// Accessing method from parent object
let animal2 = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal2,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk
