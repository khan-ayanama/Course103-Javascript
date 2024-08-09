// Non-Writable
// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// Errors only appear in only strict mode
// user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// Object.defineProperties
// Object.defineProperties(user, {
//   name: { value: "John", writable: false },
//   surname: { value: "Smith", writable: false },
//   // ...
// });

// Object.getOwnPropertyDescriptors
// To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).
