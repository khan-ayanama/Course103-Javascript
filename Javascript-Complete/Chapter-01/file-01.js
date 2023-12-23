// console.log can print something on console
console.log("hello world");

// prints info
console.info("This is an informational message.");

// prints warning
console.warn("This is a warning!");

// prints error
console.error("This is an error!");

// Clear the terminal
console.clear();

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
// prints in the form of table
console.table(people);

// Timer
console.time("Timer");
// Code to measure time
console.timeEnd("Timer");
