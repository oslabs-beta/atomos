// dom manipulation & javascript for webpage go here
// full access to DOM and DOM events

// when a msg is received from the reactFileParser
// if it has a fiber tree, return sendMessage function
function handleMessage(request, sender, sendResponse) {
  if (request.data && request.data.tree) {
    console.log('Handle Message func is here');
    return sendMessage(request.data.tree);
  }
}
// sends the reactFileParser tree and atom/selector data to the background.js
function sendMessage(tree) {
  console.log('send msg func is here!');
  chrome.runtime.sendMessage(tree);
}
// this is listening for the message from reactFileParser
window.addEventListener('message', handleMessage);

// make sure reactFileParser is appended when the DOM is loaded
// inject reactFileParser in the application after 5000ms
setTimeout(() => {
  const script = document.createElement('script');
  script.src = chrome.extension.getURL('bundles/backend.bundle.js');
  document.head.appendChild(script);
}, 5000);
