// Comparison

// Number Comparison
2 > 3; //false
1 < 6; //true

// String Comparison (First compare first character than second until we find the greater)
"Z" > "A"; // True
"Glee" < "Glow"; // True

// Comparison of different types
true == 1; // true, becomes one
"2" > 1; // true, string becomes number

// Strict Equality (===)
// If a and b are of different types then it will return false without converting them.
// NOTE:
null == undefined; // true
null === undefined; // false
// For math conversion null becomes zero while undefined become NaN
