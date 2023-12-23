// how to clone array

let array1 = ["item1", "item2"];

// how to concatenate two arrays
// By slice method
let array2 = array1.slice(0).concat(["item3", "item4"]);

// concat an empty array
let array3 = [].concat(array1, ["item3", "item4"]);

// new way
// spread operator
let oneMoreArray = ["item3", "item4"];
let array4 = [...array1, ...oneMoreArray];
