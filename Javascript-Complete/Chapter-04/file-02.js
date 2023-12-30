// map method
const numbers = [3, 4, 6, 1, 8];

const square = function (number) {
  return number * number;
};

// Example:01
const squares = numbers.map((number) => square(number));

// Example:02
const squareNumber = numbers.map((number, index) => {
  return index;
});
console.log(squareNumber);

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

// Example:03
const userNames = users.map((user) => {
  return user.firstName;
});
console.log(userNames);

// Example:04
const adults = users.map((user) => (user.age >= 18 ? user : "under-age"));
console.log(adults);
