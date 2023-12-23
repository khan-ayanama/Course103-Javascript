// Data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6
// booleans --> true||false
// undefined
// null
// BigInt
// Symbol

// number
let age = 22;

// string
let firstName = "harshit";
console.log(typeof age);

// Number --> String
// 22 -> "22"
age = age + "";
console.log(typeof age);
("22");
age = String(age);

// Convert string to number.
let myStr = +"34";
console.log(typeof myStr);

age = "18";
age = Number(age);
console.log(typeof age);

// string concatenation
let string1 = "17";
let string2 = "10";

let newString = +string1 + +string2;
console.log(typeof newString);

// undefined
// let firstName;
// console.log(typeof firstName);

// null
let myVariable = null;
console.log(myVariable);

// NOTE:
// console.log(typeof null);
// bug , error

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMyNumber);
