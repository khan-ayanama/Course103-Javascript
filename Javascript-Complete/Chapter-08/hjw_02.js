// hoisting
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction() {
  console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName);

// Let's Initialize the code
// 1. Compilation phase:
// Eary error checking
// Global Scope has knowledge about
// * firstName
// * lastName
// * fullNamee
// * function myFunction()

// Global Execution context is added into stack.
// 2. Execution Phase:
// Global Memory:
// * firstName:undefined
// * lastName:undefined
// * fullName:undefined
// * myFunction(): when function is declared by function keyword it will added into global memory
// Global Execution Context:
// console.log(this) //output: window
// console.log(window) //output: window
// console.log(myFunction) //output: myfunction(){conosle.log('this is my function')}
// console.log(fullName): undefined
// var firstName = 'Harshit' // It will set the firstName = 'Harshit'
// var lastName = "Sharma" // It will set the lastName = Sharma
// var fullName = firstName+" "+lastName // It will set the value of lastName
// console.log(fullName) // output:Harshit Sharma
