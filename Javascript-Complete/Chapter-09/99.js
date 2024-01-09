// Example:01
// function hello(x){
//     const a  = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();

// Example:02
// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);

// Example:03
function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi You Called me");
      counter++;
    } else {
      console.log("Mai already ek bar call ho chuka hoon!");
    }
  };
}

const myFunc = func();
myFunc();
myFunc();
