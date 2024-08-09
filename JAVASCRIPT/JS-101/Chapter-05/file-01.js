// Methods of primitive

// method of primitive created at the time and destroyed later leaving primitive alone

// Zero is truth if created as object
let zero = new Number(0);
if (zero) {
  console.log("first");
} else {
  console.log("seo");
}

// Example
// In the below example str type of string created which is primitive
// In the second line when we call toUpperCase() it creates a wrapper object
// After converting wrapper is destroyed
let str = "Lucknow";
str.toUpperCase();

// Null/Undefined have no methods
