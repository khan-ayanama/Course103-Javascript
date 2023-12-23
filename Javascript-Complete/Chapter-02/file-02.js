// array push pop

// array shift unshift

let fruits = ["apple", "mango", "grapes"];

// push: add value at last
fruits.push("banana");
console.log(fruits);

// pop: pops value from last and returns the possped value
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift: Adds value in beginning and push all the elements back
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift: Removes element from beginning and returns the value
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);
