function hello() {
  console.log("hello world");
}

// prototype
// In JS Functions consist of ==> function + {}
// The empty object prvided by function called prototype, Only functions provide prototype
// prototype is completely from __proto__
// __proto__ is linked object while prototype is object provided by functions

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property --> tells function name;

// function provides more usefull properties.

// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());
