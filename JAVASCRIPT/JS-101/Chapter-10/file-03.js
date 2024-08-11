// try...catch...finally
// finally block will run irrespective of operation is successfull or there is an error
try {
  // ... try to execute the code ...
} catch (err) {
  // ... handle errors ...
} finally {
  // ... execute always ...
}

// We can exclude catch block
function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}

// Global catch
// When there is an error somewhere in an script then we can use
// window.onerror
window.onerror = function (message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // Whoops, something went wrong!
}

readData();

// The role of the global handler window.onerror is usually not to recover the script execution – that’s probably impossible in case of programming errors, but to send the error message to developers.

// There are many online tools which helps in case or error
