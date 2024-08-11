// Writing doesn't use prototype

// write/delete operation work directly with object only.

let user = {
  name: "John",
  surname: "Smith",

  // Define a setter for fullName
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  // Define a getter for fullName
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user, // Inherits from user
  isAdmin: true,
};

console.log(admin.fullName); // Outputs: John Smith

// Set a new fullName
admin.fullName = "Alice Cooper";

console.log(admin.fullName); // Outputs: Alice Cooper
console.log(user.fullName); // Outputs: John Smith

// this in inheritence
// this refers to the object that is calling the method.
// When you call a method on an object, this inside that method refers to the object itself, not the prototype.

let vehicle = {
  start() {
    this.isRunning = true;
    console.log(`${this.type} is starting...`);
  },
  stop() {
    this.isRunning = false;
    console.log(`${this.type} is stopping...`);
  },
};

let car = {
  type: "Car",
  __proto__: vehicle,
};

let bike = {
  type: "Bike",
  __proto__: vehicle,
};

// Call the start method on car
car.start(); // Outputs: "Car is starting..."

// Call the start method on bike
bike.start(); // Outputs: "Bike is starting..."

// Check the state of car and bike
console.log(car.isRunning); // Outputs: true
console.log(bike.isRunning); // Outputs: true

// Check if vehicle is running (it shouldn't be)
console.log(vehicle.isRunning); // Outputs: undefined

// Object.keys gives the keys from an object as well as parent object
