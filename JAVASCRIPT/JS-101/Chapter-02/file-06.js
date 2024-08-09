// Basic Operators, maths

// % (Remainder)
// Example
let result = 5 % 2; // Answer: 1

// ** (Exponentiation)
// Examples
2 ** 2 == 4;
2 ** 3 == 8;
4 ** (1 / 2) == 2; // Square Root
8 ** (1 / 3) == 2; // Cubic root

// String concatenations
"Ayan" + "Khan" == "AyanKhan";
1 + "2" == "12";
2 + 2 + "1" == 41;
"1" + 2 + 2 == "122"; // not 14

// Other than + all operands work only one number and always converts their operand into number
6 - "2" == 4;
"6" / "2" == 3;
"a" - "b" == NaN;

// Numberic conversion

let string1 = "5";
let string2 = "8";

(string1 + string2 == 58(+string1) + +string2) == 13;

// Chaining assignemtns
let a, b, c;
a = b = c = 2 + 2;

// Modify in place
let n = 2;
n += 6;
n -= 2;

// Increment/Decrement

let counter = 2;
// Post increment
counter++;
counter--;

// Pre increment
--counter;
++counter;

// BITWISE OPERATORS

// AND(&), OR(|), XOR(^), NOT(~), LEFT SHIFT(<<),ZERO-FILL RIGHTSHIFT(>>>)

// COMMA (When we write more than two experssion in line)
// It will return the last expression
let x = (1 + 2, 3 + 4);
