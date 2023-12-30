// Call, apply, and bind are methods that are used to manipulate the this value of a function and, in the case of call and apply, to invoke the function with a specified context. Here's an overview of each:

// 1. call Method:
// The call method allows you to invoke a function with a specified this value and arguments provided individually.

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const citizen = { name: "John" };

sayHello.call(citizen, "Hi"); // Output: Hi, John!
// In this example, call is used to invoke the sayHello function with person as the this value and 'Hi' as an argument.

// 2. apply Method:
// Similar to call, the apply method is used to invoke a function with a specified this value, but it takes an array or array-like object as the second argument.

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const student = { name: "John" };

sayHello.apply(student, ["Hi"]); // Output: Hi, John!
// In this example, apply is used to achieve the same result as call, but the arguments are passed in an array.

// 3. bind Method:
// The bind method creates a new function with a specified this value and any initial arguments. Unlike call and apply, bind does not immediately invoke the function but returns a new function that can be invoked later.

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: "John" };

const sayHelloToJohn = sayHello.bind(person);
sayHelloToJohn("Hello"); // Output: Hello, John!
// In this example, bind is used to create a new function (sayHelloToJohn) with person as the this value. The new function can be invoked later with the specified greeting.
