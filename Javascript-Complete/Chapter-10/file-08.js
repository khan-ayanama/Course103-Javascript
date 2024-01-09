// DOM TRAVERSING
// There are several methods and properties in JavaScript that facilitate DOM traversal. Here are some common techniques:

// Parent and Child Nodes:
// Use the parentNode property to access the parent node of an element.
// Use the childNodes property to get a collection of child nodes of an element.

const parentElement = document.getElementById("parent");
const parentContainer = parentElement.parentNode;

const childNodes = parentElement.childNodes;


// Siblings:
// Use the nextSibling and previousSibling properties to navigate to the next or previous sibling node.

const firstChild1 = parentElement.firstChild; // Equivalent to parentElement.childNodes[0]
const nextSibling = firstChild.nextSibling;

const lastChild1 = parentElement.lastChild; // Equivalent to parentElement.childNodes[parentElement.childNodes.length - 1]
const previousSibling = lastChild.previousSibling;


Children:
// Use the firstChild and lastChild properties to get the first and last child nodes of an element.

const firstChild = parentElement.firstChild;
const lastChild = parentElement.lastChild;


// Element-specific Traversal:
// Methods like nextElementSibling and previousElementSibling skip non-element nodes and directly access the next or previous element sibling.

const firstElementChild = parentElement.firstElementChild;
const nextElementSibling = firstElementChild.nextElementSibling;


// Traversal Upwards or Downwards:
// Methods like closest and querySelector can be used to navigate upwards or downwards in the DOM tree based on CSS selectors.

const closestDiv = element.closest("div");
const nestedParagraph = closestDiv.querySelector("p");

