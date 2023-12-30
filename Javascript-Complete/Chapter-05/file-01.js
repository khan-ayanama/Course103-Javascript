// optional chaining
// It helps to avoid errors that would occur if you try to access properties or call functions on undefined or null values.
const user = {
  firstName: "harshit",
  // address: {houseNumber: '1234'}
};

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
