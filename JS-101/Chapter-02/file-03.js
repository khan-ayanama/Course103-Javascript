// Data types
// JS is dynamically typed programming language

// Number
let n = 123;
n = 1.23;

let a = Infinity;
let b = NaN;
// Any operation on NaN return NaN excpet raise to the power 0 which is equal to 1

// BigInt
// "n" at the end means it's big int
let num = 123n;
let num2 = BigInt(12342);

// String

let str = "hello";
let str2 = "Single quotes";
let phrase = `${str} what's up`;

// Boolean, null, undefined

// typeof
// Syntax: typeof(num) === (typeof num)

// Summary
// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.

// And one non-primitive data type:
// object for more complex data structures.
// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object
