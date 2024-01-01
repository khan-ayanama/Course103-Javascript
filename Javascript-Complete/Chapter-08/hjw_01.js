// Javascript is synchronous programming and single threaded.

// Ecmascript doesn't say there should be compilation before Execution.
// According to Ecmascript there should be early error checking and Determining Appropriate Scope of Variable
// Different Browsers follow their own unique methods for compilation. But Genrally:-

// In Javascript there are two phase of execution
// 1. Compilation:
// * Tokenizing/Lexing --> Breaks the code into small chunks called Token
// * Parsing: It makes Abstract Syntax Tree (AST) fro those Chunks
// * Code generation

// 2. Execution: In JS code executes inside Execution Context. It creates a Global Execution Context and it has two phases:-
// * Creation Phase
// * Code Execution

// If there is something wrong in code it will give an error in the begining and not act like interpreter that when reach to that line then throw an error.

// let's analyze this code:-
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);

// 1. Creation phase
// * this and window value are equal and set to global object in browser.
// * firstname is intialized and set to undefined
// 2. Execution phase
// console.log(this): It will print the golbal object
// console.log(window): It will print global object
// console.log(firstName) output:undefined
// var firstName = 'Ayan' Here now it will set the firstname = ayan which was initially undefined
// console.log(firstName) output:Ayan
