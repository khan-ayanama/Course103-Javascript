// Functions in Javascript

// Function Declaration
function sumThreeNumbers1(number1, number2, number3) {
  return number1 + number2 + number3;
}

const ans1 = sumThreeNumbers1(1, 2, 3);

// function expression
const sumThreeNumbers2 = function (number1, number2, number3) {
  return number1 + number2 + number3;
};
const ans2 = sumThreeNumbers2(2, 3, 4);

// arrow functions
const sumThreeNumbers3 = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

const ans3 = sumThreeNumbers3(2, 3, 4);
console.log(ans);

// Variation of an arrow function
const ans4 = (number1, number2, number3) => number1 + number2 + number3;
const ans5 = (number) => number;
