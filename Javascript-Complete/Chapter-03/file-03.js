// default parameters
function addTwo(a, b = 0) {
  return a + b;
}

const ans = addTwo(4);
console.log(ans);

// rest parameters
function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const sum = addAll(4, 5, 4, 2, 10);
console.log(ans);

// param destructuring
const person = {
  firstName: "harshit",
  gender: "male",
  age: 500,
};

function printDetails({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}

printDetails(person);
