// Popups and window methods

// A popup window is one of the oldest methods to show additional document to user.

const youtubeBtn = document.getElementById("popup");

const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

// This is allowed
youtubeBtn.onclick = () => {
  window.open("https://www.facebook.com", "test", params);
};

// This opens youtube automaticlaly
// window.open("https://www.youtube.com");

// Popups are used for OAuth authorization (login with google/facebook)
// Most browsers block popups if they are called outside of user-triggered event handlers like `onclick`

// window.open(url,name,params)
// url -> URL to load
// name -> name for the window in which you want to open popup if name of parent window and popup window is same then popup will open in same window.
// params -> Property of popup window
