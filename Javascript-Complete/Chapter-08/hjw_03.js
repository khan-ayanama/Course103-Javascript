// Hoisting: Before execution the variables stored in global memrory

// Example:
console.log(myFunction); //ouput:undefined
myFunction(); // Error: Not a function

var myFunction = function () {
  console.log("this is my function");
};

console.log(myFunction); // ouput: prints whole function
