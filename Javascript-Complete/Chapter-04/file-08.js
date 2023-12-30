// fill method
// value , start , end

const myNewArray = new Array(10).fill(1);
console.log(myNewArray);

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
numbersArray.fill(0, 2, 5);
console.log(numbersArray);

// splice method
// start , delete , insert

const itemsArray = ["item1", "item2", "item3"];
itemsArray.splice(1);
console.log("after deleting: ", itemsArray);

// delete
const deletedItem = itemsArray.splice(1, 2);
console.log("deleted item ", deletedItem); // output: deleted item  [ 'item2', 'item3' ]

// insert
itemsArray.splice(1, 0, "inserted item");

// insert and delete
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
// console.log(myArray);
