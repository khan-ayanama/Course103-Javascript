// closures
// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();

// When function returns the function
// It also returns with the variable it needed
function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;
}

const ans = printFullName("harshit", "sharma");
// console.log(ans);
// Here answer has the access to firstName & lastName
ans();
