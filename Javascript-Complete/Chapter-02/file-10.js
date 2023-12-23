// objects inside array
// very useful in real world applications

const users1 = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];
for (let user of users1) {
  console.log(user.firstName);
}

// nested destructuring
const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
