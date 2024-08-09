// Cross-window communication

const iframe = document.getElementById("popup");

iframe.onload = function () {
  // we can get the reference to the inner window
  let iframeWindow = iframe.contentWindow; // OK
  try {
    // ...but not to the document inside it
    let doc = iframe.contentDocument; // ERROR
  } catch (e) {
    alert(e); // Security Error (another origin)
  }

  // also we can't READ the URL of the page in iframe
  try {
    // Can't read URL from the Location object
    let href = iframe.contentWindow.location.href; // ERROR
  } catch (e) {
    alert(e); // Security Error
  }

  // ...we can WRITE into location (and thus load something else into the iframe)!
  iframe.contentWindow.location = "/"; // OK

  iframe.onload = null; // clear the handler, not to run it after the location change
};
