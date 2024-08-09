// Strings Methods

let single = "single-quoted";
let double = "double-quoted";
let backtick = `backticks`;

// Nultiline strings
let guestList = `Guests:
* John
* Pete
* Mary`;
console.log(guestList);

// Length of string
let name = "ayan\n";
let name2 = "ayan";
console.log(name.length, name2.length); // 5,4

// Accesing characters
let str = "Hello";
console.log(str[0]);
console.log(str.at(-1));
console.log(str.charAt(1));

// Strings are immutable
str[0] = 5;
console.log(str);

// Changing the case
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[0].toLowerCase());

// Searching for substring: string.indexOf('subString',startNum)
let statement = "Widget with id";
console.log(statement.indexOf("with", 2));
