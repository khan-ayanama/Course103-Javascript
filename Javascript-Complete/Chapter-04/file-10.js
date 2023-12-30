// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Duplicate values are ignored in a Set

// Checking the size of the Set
console.log(mySet.size); // Output: 3

// Checking if a value is in the Set
console.log(mySet.has(2)); // Output: true

// Deleting a value from the Set
mySet.delete(2);

// Iterating over the Set
mySet.forEach(value => {
  console.log(value);
});

// Clearing all values from the Set
mySet.clear();
