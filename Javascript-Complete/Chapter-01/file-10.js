// while loop
while (i <= 9) {
  console.log(i);
  i++;
}
console.log(`current value of i is ${i}`);

// intro to for loop
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// do while loop
let i = 10;
do {
  console.log(i);
  i++;
} while (i <= 9);

console.log("value of i is ", i);

// break keywork
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// continue keyword
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
