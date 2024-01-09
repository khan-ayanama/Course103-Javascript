// CLASSLIST

// Add class
var element = document.getElementById("myElement");
element.classList.add("newClass", "anotherClass");

// Remove Class
var element = document.getElementById("myElement");
element.classList.remove("oldClass", "extraClass");

// Toggle Class
var element = document.getElementById("myElement");
element.classList.toggle("active");

// contains
var element = document.getElementById("myElement");
var hasClass = element.classList.contains("someClass");

// Index ==> returns index of class
var element = document.getElementById("myElement");
var firstClass = element.classList.item(0);

// Lenght of claslist
var element = document.getElementById("myElement");
var numberOfClasses = element.classList.length;
