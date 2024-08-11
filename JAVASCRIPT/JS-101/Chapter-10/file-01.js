// When script encouters error it suddenly stops/dies.

// try...catch is a method where you can perform some task if there is an error.
// First code will run inside try block if there is no error it will skip catch block
// If there is an error inside try block then catch block will run
// try and catch will only work on run-time error not parse-time error(i.e any syntax error)
try {
  console.log("Try block");
} catch (error) {
  console.log("Catch block");
}

// try...catch work synchronously
// For example below code won't throw an error
try {
  setTimeout(() => {
    noSuchline;
  }, 1000);
} catch (err) {
  console.log("Error happened in try block");
}

// But here it will work
setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert("error is caught here!");
  }
}, 1000);

// ERROR OBJECT
// Error Object contains:-
// name --> Name of an error
// message --> Detals about an error
// stack --> Current stack of an error

try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

// Optional 'catch' binding
// if you don't want you don't need to pass err object in catch block
try {
  // Some operations
} catch {
  // Some error without help of error object
}
