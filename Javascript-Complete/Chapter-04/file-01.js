// important array methods
// FOREACH Method:
// forEach method does not create a new array; it just iterates over the existing one.

const numbers = [4, 2, 5, 8];

// Example-01:
numbers.forEach((num) => iterateArray(num));

// Example-02:
numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

// Example-03:
users.forEach(function(user){
    console.log(user.firstName);
});

// Example-04:
users.forEach((user, index) => {
  console.log(user.firstName, index);
});

// Example-05:
for(let user of users){
    console.log(user.firstName);
}
