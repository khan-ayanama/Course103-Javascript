// Create an array of numbers and strings
const myArray = [1, "hello", 5, true, [10, 20]];

// Manipulation Methods

// Add element to the end (push)
myArray.push("world");
console.log("After push:", myArray); // Output: [1, "hello", 5, true, [10, 20], "world"]

// Remove element from the end (pop)
const lastElement = myArray.pop();
console.log("Removed element:", lastElement); // Output: Removed element: world

// Remove element from the beginning (shift)
const firstElement = myArray.shift();
console.log("After shift:", myArray); // Output: ["hello", 5, true, [10, 20]]

// Add element to the beginning (unshift)
myArray.unshift(0);
console.log("After unshift:", myArray); // Output: [0, "hello", 5, true, [10, 20]]

// Extract a portion (slice)
const extracted = myArray.slice(1, 3); // Extract elements at index 1 (inclusive) to 3 (exclusive)
console.log("Extracted:", extracted); // Output: ["hello", 5]

// Reverse the order (reverse)
myArray.reverse();
console.log("Reversed array:", myArray); // Output: [true, 5, "hello", 0]

// Fill elements with a value (fill)
myArray.fill("replaced", 1, 3); // Fill elements from index 1 to 2 (exclusive) with "replaced"
console.log("After fill:", myArray); // Output: [true, "replaced", "replaced", 0]

// Searching and Sorting Methods

// Find the first truthy element (find)
const truthyElement = myArray.find((element) => element); // element is truthy if not null, undefined, 0, "" etc.
console.log("First truthy element:", truthyElement); // Output: First truthy element: true

// Find the index of the first element containing "e" (findIndex)
const indexOfE = myArray.findIndex((element) => element.includes("e"));
console.log("Index of element with 'e':", indexOfE); // Output: Index of element with 'e': 1 (index of "replaced")

// Check if array includes a specific value (includes)
const hasZero = myArray.includes(0);
console.log("Array includes 0:", hasZero); // Output: Array includes 0: true

// Conversion Methods

// Join the array elements into a string (join)
const joinedString = myArray.join(", ");
console.log("Joined string:", joinedString); // Output: Joined string: true, replaced, replaced, 0

// split the string into an array (split)
const splittedArray = joinedString.split(", ");
console.log("Splitted array:", splittedArray); // Output: Splitted array: [true, replaced, replaced, 0]

// Combine arrays (concat)
const newArray = myArray.concat(["new", "elements"]);
console.log("Combined array:", newArray); // Output: [true, "replaced", "replaced", 0, "new", "elements"]

// Get a string representation (toString) - not very useful for most cases
const stringRep = myArray.toString();
console.log("String representation:", stringRep); // Output: String representation: true,replaced,replaced,0

// Iteration Methods

// Loop through each element and log (forEach)
myArray.forEach((element) => console.log(element));

// Create a new array with doubled values (map)
const doubled = myArray.map((element) => element * 2); // Doubles numbers and keeps strings/booleans
console.log("Doubled:", doubled); // Output: [2, NaN, NaN, 0, "new", "elements"]

// Create a new array with only truthy elements (filter)
const truthyArray = myArray.filter((element) => element);
console.log("Truthy array:", truthyArray); // Output: Truthy array: [true, "replaced", "replaced", 0, "new", "elements"]

// Reduce the array to a single value (reduce) - requires a reducer function
const sum = myArray.reduce((accumulator, element) => accumulator + element, 0); // Initial value is 0
console.log("Sum of array:", sum); // Output: Sum of array: 12 (ignores NaN)

// Utility Methods

// Check if something is an array (isArray)
const isArrayExample = Array.isArray(myArray);
console.log("myArray is an array:", isArrayExample);

// startsWith
const startsWithHello = myArray.startsWith("hello");
console.log("myArray starts with 'hello':", startsWithHello);

// endsWith
const endsWithWorld = myArray.endsWith("world");
console.log("myArray ends with 'world':", endsWithWorld);
