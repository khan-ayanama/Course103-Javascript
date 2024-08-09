// Array methods

// splice
// arr.splice(start,deleteCount,insertElem1,inserElem2,...)
// Start can be negative index
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2, 67, 69, 234, 2342);
console.log(arr1);

// slice
// arr.slice(start,end) returns new array
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(1, 3));

// concat
// arr.concat(arg1,arg2,..)
let arr3 = ["one"];
let ans = arr3.concat(arr1, arr2, "one more item");
console.log(ans);

// forEach
// arr.forEach(function(item,index,array){
// do something here
// })
// ans.forEach((num, index, array) => {
//   console.log(num, index, array);
// });

// Searching in array
let arr4 = [1, 0, false];

console.log(arr4.indexOf(0));
console.log(arr4.indexOf(false));
console.log(arr4.indexOf(null));
console.log(arr4.includes(1));
