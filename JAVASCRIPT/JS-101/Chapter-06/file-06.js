// new function syntax
// let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function("a", "b", "return a+b");

console.log(sum(1, 2));

// Without parameters
let sayHi = new Function('alert("Hello")');

// Closure
// When function is created with new Function it's [[Environment]] set to the global one
function getFunc() {
  let value = "test";
  let func = new Function("alert(value)");
  return func;
}
getFunc()(); // error: value is not defined
