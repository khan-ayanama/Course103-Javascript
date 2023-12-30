// filter method

const numbers = [1, 3, 2, 6, 4, 8];

// Filter out even numbers
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);

// Filter out even numbers
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(oddNumbers);
