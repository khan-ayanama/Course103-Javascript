// Logical Operators
// (||), (&&), (!), (??)

// Shows the first Truthy value
firstName || lastName || nickName || "Anonymous";

// Below two expression are same
a ?? b;
result = a !== null && a !== undefined ? a : b;
// if a is defined, then a other b

// shows first defined value
firstName ?? lastName ?? nickName ?? "Anonymous";

let user;
alert(user ?? "Anonymouse"); // Anonymous (use is undefined
