// iterables
// jispe hum for of loop laga sakein
// string , array are iterable

// Example:01
const firstName = "Harshit";
for (let char of firstName) {
  console.log(char);
}

// Example:02
const items = ["item1", "item2", "item3"];
for (let item of items) {
  console.log(item);
}

// array like object
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);

// Cloning of an object: Object.assign(obj)
// clone using Object.assign

// memory

const obj = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {'key69': "value69",...obj};
const obj2 = Object.assign({ key69: "value69" }, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);
