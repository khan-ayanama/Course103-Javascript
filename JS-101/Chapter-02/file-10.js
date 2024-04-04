// Loops

// while loop
while (condition) {
  // code
}

// Curly braces not required for single-line body
while (i) alert(i--);

// do while loop
do {
  // code
} while (condition);

// for loop
for (begin; condition; step) {
  // code
}

// break --> this keyword exits the loop
// continue --> this keyword skips the step

// labels for break/continue
outerLoop: for (let i = 0; i < 3; i++) {
  console.log("Outer loop iteration:", i);
  innerLoop: for (let j = 0; j < 3; j++) {
    console.log("Inner loop iteration:", j);
    if (j === 1) {
      continue outerLoop; // Continue the outer loop if inner loop reaches 1
    }
    if (i === 2 && j === 2) {
      break outerLoop; // Break both loops when i and j reach 2
    }
  }
}
