// Let and Const are hoisted but remain unitialization

// Uncaught ReferenceError:
// Cannot access 'firstName' before initialization

// Uncaught ReferenceError:
console.log(fullName);
// Error: firstName is not defined

console.log(firstName);
let firstName;
console.log(firstName);

console.log(typeof firstName); // outuput: undefined

firstName = "harshit";
console.log(firstName); //ouput:harshit

// Temporal Dead Zone (TDZ): The time between unintialization and initialization of val of variable.
