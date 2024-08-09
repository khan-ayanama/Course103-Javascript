// Optional Chaining (?.)
// It stops evaluation if the value before ?. is undefined or null and returns undefined

let user = {};

console.log(user.name?.full.cake);

// Variation of optional chaining

let userAdmin = {
  firstName: "John",
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();

userAdmin?.["firstName"];
