// Every method
const numbers = [2, 4, 6, 9, 10];

// Method:01
const everyNumberIsEven = numbers.every((number) => number % 2 === 0);
console.log(everyNumberIsEven);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
];

// Method:02
const allItemChepaerThan30000 = userCart.every(
  (cartItem) => cartItem.price < 30000
);
console.log(allItemChepaerThan30000);

// Some Method
const anyItemChepaerThan30000 = userCart.some(
  (cartItem) => cartItem.price < 30000
);
console.log(anyItemChepaerThan30000);
