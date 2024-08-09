// Arrays
// Order collection of an element
// Array is copied by reference

// Declaration
let arr1 = new Array();
let arr2 = [];

let num = [1, 2, 3, 4];
console.log(num[2]);
console.log(num.length);
console.log(num);

let mixed = [1, "ONe", { name: "John" }, [1, 2, 3]];

// last element
console.log(mixed[mixed.length - 1]);
console.log(mixed.at(-1));

// Methods
// at -> returns element at index: mixed.at(index)
// push -> adds an element to end of array
// pop -> takes an elemnet from end of array
// shift -> removes first element from array
// unshift -> add element at begining of array

// Bad practice for memory optimization
let fruits = [];
fruits[9999] = 5;
fruits.age = 25;
console.log(fruits);

let arr = ["apple", "oranges", "banana"];

// for loop over index
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of loop
for (item of arr) {
  console.log(item);
}

// key in array
for (let key in arr) {
  console.log(arr[key]);
}

// NOTE: Length of an array is lastIndex+1

// new Array
let arr3 = new Array(1, 2, 3, 4);
console.log(arr3);

// Multidimensional array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]);

// toString
let arr4 = [1, 2, 3, 4];
console.log(arr4.toString()); // '1,2,3,4'

[] + 1; // '1'
[1] + 1; // '11'
[1, 2] + 1; // '11,21'

// Comparison with ==
[1, 2] == [1, 2]; // false
[0] == [0]; // false

[] == 0; // true
"0" == [0]; // false
