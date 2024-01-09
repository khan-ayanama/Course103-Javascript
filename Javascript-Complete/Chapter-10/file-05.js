// GET AND SET ATTRIBUTES

// Get attribute value
const imageSource = document.getElementById("myImage").getAttribute("src");
const imageAlt = document.getElementById("myImage").getAttribute("alt");

console.log("Initial Image Source:", imageSource);
console.log("Initial Image Alt Text:", imageAlt);

// Set attribute value
document.getElementById("myImage").setAttribute("src", "new-image.jpg");
document.getElementById("myImage").setAttribute("alt", "New Image Alt Text");

// Get updated attribute values
const updatedImageSource = document
  .getElementById("myImage")
  .getAttribute("src");
const updatedImageAlt = document.getElementById("myImage").getAttribute("alt");

console.log("Updated Image Source:", updatedImageSource);
console.log("Updated Image Alt Text:", updatedImageAlt);
