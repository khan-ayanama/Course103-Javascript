// AND (&&)
if (firstName[0] === "H" && age > 18) {
  console.log("Name starts with H and above 18");
} else {
  console.log("inside else");
}

// OR (||)
let firstName = "arshit";
let age = 16;

if (firstName[0] === "H" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}

// PROMPT
let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}
