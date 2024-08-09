// Maps - Key-Value Pairs

// Create a Map
const userMap = new Map();

// Add key-value pairs (key can be of any data type)
userMap.set("name", "John Doe");
userMap.set(123, { email: "johndoe@example.com" }); // Object as value
userMap.set(true, "Active User");

// Get a value by its key
const userName = userMap.get("name");
console.log("User name:", userName); // Output: User name: John Doe

// Check if a key exists
const hasEmailKey = userMap.has(123);
console.log("Has email key:", hasEmailKey); // Output: Has email key: true

// Delete a key-value pair
userMap.delete(true);

// Iterate over the Map entries (key-value pairs)
for (const [key, value] of userMap.entries()) {
  console.log("Map entry:", key, value);
}

// Sets - Unique Values

// Create a Set
const fruits = new Set(["apple", "banana", "orange", "apple"]); // Duplicates will be ignored

// Add elements to the Set
fruits.add("mango");

// Check if a value exists (uses same method as Map)
const hasGrape = fruits.has("grape");
console.log("Has grape:", hasGrape); // Output: Has grape: false

// Delete a value from the Set
fruits.delete("banana");

// Sets don't have indexes, so you cannot access elements directly. However, you can iterate:
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// Additional Set Methods
console.log("Set size:", fruits.size); // Output: Set size: 2 (unique elements)
console.log("Set values as array:", [...fruits]); // Spread syntax to convert to array
