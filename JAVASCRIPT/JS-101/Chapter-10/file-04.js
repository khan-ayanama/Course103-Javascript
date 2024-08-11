// Custom error
// We can add or modify in an error object
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent class constructor
    this.name = "ValidationError"; // Set the error name
  }
}

function validateAge(age) {
  if (age < 18) {
    throw new ValidationError("Age must be 18 or older.");
  }
}

try {
  validateAge(16);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error: " + error.message);
  } else {
    console.error("Unknown Error: " + error.message);
  }
}
