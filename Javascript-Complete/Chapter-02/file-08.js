// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

// Object.keys: returns an array
console.log(typeof (Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key]);
}

// computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

