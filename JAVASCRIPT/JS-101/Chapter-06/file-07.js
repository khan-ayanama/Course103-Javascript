// Schedulling
// When you want to execute a function some times later.

// setTimeout -> Provided by Browsers
// Syntax
// let timerId = setTimeout(func|code,[delay],[arg1],[arg2],..)

function sayHi(phrase, who) {
  console.log(phrase + " " + who);
}

const timerId = setTimeout(sayHi, 1000, "Hello", "John");
// Cancels the execution of timeout
clearTimeout(timerId);

// setInterval
// Syntax
// let intervalId = setInterval(func|code,[delay],[arg1],[arg2],..)

let intervalId = setInterval(() => alert("tick"), 2000);

setTimeout(() => {
  clearInterval(intervalId);
  alert("stop");
}, 5000);
