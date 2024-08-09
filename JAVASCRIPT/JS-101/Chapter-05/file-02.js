// Numbers

// Wrting Numbers
let billion = 1000000000;
let trillion = 1_000_000_000_000;
let oneBillion = 1e9;

let microSeconds = 0.000001;
let mcs = 1e-6;

// Types of Numbers declaration in different bases

// Hexadecimal: starts with 0x
// Examples of Hexadecimal
let hex = 0xff;
let hex2 = 0xff;

// Octal: starts with 0o
// Examples of Octal
let octal = 0o123;
let octal2 = 0o123;

// Binary: starts with 0b
// Examples of Binary
let binary = 0b1010;
let binary2 = 0b1010;

// number.toString(base_of_number)
// base_of_number = 2, 8, 10, 16
// toString() converts the number into string according to the base
let num = 255;
console.log(num.toString(2));

// Two dots to call a method
// 123..toString()
console.log((123).toString());

// ROUNDING NUMBERS
// Math.floor() -> 3.1 becomes 3 and -1.1 becomes -2
// Math.ceil() -> 3.1 becomes 4 and -1.1 becomes -1
// Math.round() -> 3.1 becomes 3, 3.6 becomes 4
// Math.trunc() -> removes anything after decimal

// Rouding number with certain digits
// num.toFixed(digits)
// toFixed() always returns string
console.log((12.3453).toFixed(2));
console.log((12.3).toFixed(5));

// Imprecise caluculations
// 0.1 + 0.2 = 0.30000000000000004
0.1 + 0.2 == 0.3; // false, because of imprecise caluculations

// Tests: isFinite and isNaN

// Infinity and (-Infinity) is a special numeric value
// NaN represents an error

// isNaN -> converts argument into numeric value and then tests being NaN
console.log(isNaN(NaN));
console.log(isNaN(2)); // false
console.log(NaN == NaN); // IT will be false!

// isFinite -> checks whether a string value is regular number
console.log(isFinite("234")); // true
console.log(isFinite("ayan")); // false
