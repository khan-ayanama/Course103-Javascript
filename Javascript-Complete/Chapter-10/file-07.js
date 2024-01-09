// DOM TREE

// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. This tree structure is commonly referred to as the DOM tree.

// Document Node:
// At the top of the tree is the document node, which represents the entire HTML or XML document.
// It serves as the entry point to the DOM tree.
const rootNode = document.getRootNode();

// Element Nodes:
// Elements in the HTML document, such as <html>, <head>, <body>, and so on, are represented as element nodes in the DOM tree.
// Each element node can have child nodes, which are the elements or other nodes nested within it.

// Attribute Nodes:
// Attributes of an HTML element, like id, class, or src, are represented as attribute nodes in the DOM tree.
// These nodes are typically children of the corresponding element node.

// Text Nodes:
// The text content within HTML elements, such as the text inside a <p> or <span> tag, is represented as text nodes in the DOM tree.
// Text nodes are children of the element nodes containing the text.

// Comment Nodes:

// Comments in HTML (<!-- This is a comment -->) are represented as comment nodes in the DOM tree.
// Comment nodes are separate from element nodes but are part of the overall structure.

// Accessing the DOM tree through JavaScript
var mainContainer = document.getElementById("main-container");
console.log("Document Node:", document);
console.log("Element Node (mainContainer):", mainContainer);
console.log("Child Nodes of mainContainer:", mainContainer.childNodes);
