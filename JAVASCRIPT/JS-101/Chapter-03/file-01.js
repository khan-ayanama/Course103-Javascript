console.log("hello");

function hello(name) {
  let phrase = `Hello, ${name}!`;
  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase}**`);
}

const styles = `padding:5px;background-color:red;color:white;font-size:40px;`;
console.log("%cDAMN!!!!", styles);

function sayHI(name) {
  let name1 = name;
  console.log(`HELLo MR. ${name}`);
}

sayHI("Naeem");
