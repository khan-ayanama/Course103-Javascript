// Type conversion

// String Conversion
let isOpen = true;
let ans = String(isOpen); // 'true'

// Number
// If not valid number returns NaN
let num = "2";
num = Number(num);

Number("  123  "); // 123
Number("1234z"); // NaN
Number(true); // 1
Number(false); // 0
Number(undefined); // NaN

// Boolean
Boolean(1); // true
Boolean(0); // false
Boolean("HELLO"); // true
Boolean(""); // False
Boolean("0"); // True
