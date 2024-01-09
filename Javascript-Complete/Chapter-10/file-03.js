// CHANGING TEXT
// textContent and innerContent

const mainHeading = document.getElementById("main-heading");

// textContent (It will give all the text of dom not mattter it is hidden or not)
mainHeading.textContent = "This is new text";

// innerText --> It will show only UI text
mainHeading.innerText = "This is inner text";
