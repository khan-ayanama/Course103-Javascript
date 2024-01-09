// Linking Javascript file with html
const heading = document.getElementById("heading");

heading.style.backgroundColor = "blue";

// async: The script is downloaded asynchronously, and the browser will continue parsing the HTML while the script is being downloaded. Once the script is downloaded, it will be executed.

{
  /* <script async src="your-script.js"></script> */
}

// defer: The script is downloaded in the background while the HTML is being parsed, and it will be executed after the HTML is fully parsed.

// <script defer src="your-script.js"></script>
