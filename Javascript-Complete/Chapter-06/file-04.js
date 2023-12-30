const obj1 = {
  key1: "value1",
  key2: "value2",
};

// __proto__

// offical ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]
// __proto__ chains the object to another object, if JS couldn't find the key in the parent object it will look into child object which is linked through __proto__

// Here ojb2 is created and obj1 as __proto__ has been set
const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);
