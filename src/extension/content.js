// dom manipulation & javascript for webpage go here

// inject backend scripts to run on the browser window
// timeout is not needed, but can run the code asynchronously
// setTimeout (() => {
const script = document.createElement('script');
script.src = chrome.extension.getURL('bundles/backend.bundle.js');
document.head.appendChild(script);
// }, 500);

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log('content.js got message from index.js');
    // if (request.message === 'get-react-data') {

    // }
  },
);

window.onload = function () {
  /** **** CONSOLE LOGS RUN IN BROWSER CONSOLE ***** */
  console.log('content.js is loaded');

  /** **** DOM MANIPULATION WORKS HERE ***** */
  // console.log(document.getElementById('Landing'));

  /** **** CANNOT ACCESS CHROME.TABS FROM WINDOW AND CHROME ***** */
  // console.log('content.js window', window);
  // console.log('devtools content.js', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

  /** **** TO DO: ***** */
  // create event listener
  // receive message from index.js chrome tabs query
  // send message to background.js
};
