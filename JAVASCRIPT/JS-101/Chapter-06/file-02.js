// Rest Parameter and spread syntax

function sumOfAll(a, b, ...all) {
  console.log(a);
  console.log(b);
  console.log(Array.isArray(all));

  let sum = 0;
  for (let num of all) {
    sum += num;
  }

  return sum + a + b;
}

const sum = sumOfAll(1, 2, 3, 4, 4, 5, 65, 3);
console.log(sum);

// Arguments
// Functions has special array-like object named argument that contians all argument by thier index.
// we can't use map method on argument as it is not an array.
// Arrow functions do not have arguments.

// Spread Syntax
// using three dots we can spread the elements of an array or key-value of object or letters of string.
