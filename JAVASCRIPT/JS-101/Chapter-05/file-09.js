// Iterables are on which we can use for...of loop

// Built-in Iterables

// Arrays
const numbers = [1, 2, 3];

// Using for...of loop
for (const number of numbers) {
  console.log("Array:", number);
}

// Strings
const message = "Hello, world!";

for (const character of message) {
  console.log("String:", character);
}

// Sets - Order is not guaranteed
const fruits = new Set(["apple", "banana", "orange"]);

for (const fruit of fruits) {
  console.log("Set:", fruit);
}

// Maps - Key-value pairs
const colors = new Map([
  ["red", "#FF0000"],
  ["green", "#00FF00"],
  ["blue", "#0000FF"],
]);

for (const [color, hex] of colors) {
  console.log("Map:", color, hex);
}

// Custom Iterables (Example)

// Simple number range object with iterator
const numberRange = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    return {
      next() {
        if (current <= this.end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Using for...of loop with custom iterable
for (const number of numberRange) {
  console.log("Custom iterable:", number);
}
