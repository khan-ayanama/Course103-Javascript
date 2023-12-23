// functions inside function
function app() {
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  console.log(addTwo(2, 3));
}
app();

// lexical scope
const myVar = "value1";
function myApp() {
  function myFunc() {
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    myFunc2();
  }
  console.log(myVar);
  myFunc();
}

myApp();

// block scope vs function scope
// let and const are block scope
// var is function scope

if (true) {
  var firstName = "harshit";
  console.log(firstName);
}

console.log(firstName); // It will throw an error

function myApp() {
  if (true) {
    var firstName = "harshit";
    console.log(firstName);
  }

  if (true) {
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();
