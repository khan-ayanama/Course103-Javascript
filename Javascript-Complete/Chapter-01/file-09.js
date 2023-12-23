// else if expression
let tempInDegree = 4;

if (tempInDegree > 40) {
  console.log("too hot");
} else if (tempInDegree > 30) {
  console.log("lets go for swim");
} else if (tempInDegree > 20) {
  console.log("weather is cool");
} else if (tempInDegree > 10) {
  console.log("it is very cold outside");
} else {
  console.log("extremely cold");
}

// Switch Case expression

let day = 9;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}
