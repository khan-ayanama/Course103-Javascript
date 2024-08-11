// Throw operator
// throw <error object>

// Some types of js errors constructo
// name of the error will be the name of constructor
// in SyntaxError constructor name will be 'SyntaxError` and message will be message passed as argument
let error1 = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);

// Real life Example
let json1 = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json1); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert(user.name);
} catch (err) {
  alert("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
}
// In the line (*), the throw operator generates a SyntaxError with the given message, the same way as JavaScript would generate it itself. The execution of try immediately stops and the control flow jumps into catch.

// Now catch became a single place for all error handling: both for JSON.parse and other cases.

// Rethrowing an error
// When we want to be more precise about an error and we expect unexpected error we can rethrow an error in catch block

let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert(user.name);
} catch (err) {
  if (err instanceof SyntaxError) {
    alert("JSON Error: " + err.message);
  } else {
    throw err; // rethrow (*)
  }
}
