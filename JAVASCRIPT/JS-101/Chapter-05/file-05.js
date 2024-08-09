// includes
// str.includes(substr,position) returns true/false
console.log("Widget with id".includes("Wid"));

// startsWith & endsWith
console.log("widget with id".startsWith("wid"));
console.log("widget with id".endsWith("ID"));

// Getting a substring
// str.slice(start,end)
console.log("stringify".slice(1));
console.log("stringify".slice(1, 3));
console.log("stringify".slice(-4, -1));

// str.substring(start,end)
console.log("stringify".substring(2, 6));
console.log("stringify".substring(6, 2));

// str.substr(start,length)
console.log("stringify".substr(1, 4));

// Comparison strings

// 1. A lower case letter is always greater than uppercase
console.log("a" > "Z");

// 2. str.codePointAt(pos) -> Returns ASCII value in given format from character
console.log("Z".codePointAt(0));
console.log("z".codePointAt(0));
console.log("z".codePointAt(0).toString(16));

// 3. str.fromCodePoint -> creates character from numeric
console.log(String.fromCodePoint(89));

// 4. localeCompare compares the strings in the current locale
// str.localeCompare(str2) retuns an integer indicating whether str is less(-ve num), equal(0) or greater(+ve Num) than str2
