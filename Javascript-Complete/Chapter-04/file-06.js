// find method

const myArray = ["Hello", "catt", "dog", "lion"];

// Method:01
function isLength3(string) {
  return string.length === 3 ? string : null;
}

const lengthThreeAnimals = myArray.map((animal) => isLength3(animal));
console.log(lengthThreeAnimals);

// Method:02
const ans = myArray.find((string) => string.length === 3);
console.log(ans);

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];

// Method:03
const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
