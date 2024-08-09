// Global object

// Browser -> window
// Node.js -> global

console.log(globalThis == window); // true

// All property of global object can be accessed directly
window.console.log("HELLO");

var gVar = 5;
console.log(window.gVar);

window.currentUser = { name: "John" };
console.log(currentUser);

// Using for Polyfills
// We use global object to test for support of modern language features

if (!window.Promise) {
  console.log("Your browser is archaic!!");
}
