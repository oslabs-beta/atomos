// background scripts like fetch requests and server stuff go here

/** ****** CONSOLE LOGS SHOW UP IN BACKGROUND CONSOLE ****** */
// DOM MANIPULATION DOES NOT WORK HERE
// const pls = document.getElementById('Landing');
// console.log('background dom manipulation', pls);

/** ****** REACT DEVTOOLS CANNOT BE ACCESSED HERE ****** */
// console.log('background.js window', window);
// const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
// console.log('react dev tools -- background.js', dev);

console.log('background.js is loaded');

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log('background event listener');
// });

/** ****** TO DO: ******* */
// create event listener
// receive message from content.js
// send another message back to content.js
