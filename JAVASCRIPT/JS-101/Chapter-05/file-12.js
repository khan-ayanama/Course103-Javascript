// Sample JSON data
const jsonData = {
  name: "John Doe",
  age: 30,
  city: "New York",
  skills: ["JavaScript", "Python", "Java"],
  isActive: true,
};

// Parsing JSON String (if applicable)
let jsonString = JSON.stringify(jsonData); // Convert object to JSON string
console.log("JSON String:", jsonString);

const parsedData = JSON.parse(jsonString); // Convert JSON string back to object
console.log("Parsed Data:", parsedData);

// Accessing JSON Data
console.log("Name:", jsonData.name);
console.log("Skills (array):", jsonData.skills);

// Modifying JSON Data
jsonData.age = 31; // Update a property
jsonData.hobbies = ["Reading", "Movies"]; // Add a new property

console.log("Modified JSON Data:", jsonData);

// Stringify Modified Data
jsonString = JSON.stringify(jsonData);
console.log("Updated JSON String:", jsonString);

// Checking for Property Existence
if ("age" in jsonData) {
  console.log("The 'age' property exists.");
}
