// Property flags
// Object proerties, besides a value have three special attributes (flags)

/*
 * writeable -> If true, the value can be changed otherwise read-only
 * enumerable -> If true, then listed in loops, otherwise not listed
 * configurable -> If true, the property can be deleted and these attributes can be modified
 */

// Method Object.getOwnPropertyDescriptor allows to query full info about property
// Syntax:
// let descriptor = Object.getOwnPropertyDescriptor(obj,propertyName);
let user = { name: "John" };
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(descriptor, null, 2));
/**
 * property descriptor:
 * {"value":"John","writable":"true",enumerable:true,"configurable":true}
 */
