// dom manipulation & javascript for webpage go here
// full access to DOM and DOM events

// when a msg is received from the reactFileParser
// if it has a fiber tree, return sendMessage function
function handleMessage(request, sender, sendResponse) {
  console.log(
    `content.js line 7: request=${request}, sender=${sender}, sendResponse${sendResponse}`
  );
  console.log("req", request);
  if (request.data && request.data.tree) {
    // console.log('request.data FROM CONTENTJS', request.data)
    console.log("content.js line 13: tree =", request.data.tree);
    return sendMessage(request.data.tree);
  }
}
// sends the reactFileParser tree and atom/selector data to the background.js
function sendMessage(tree) {
  console.log("send msg func is here!");
  chrome.runtime.sendMessage(tree);
}
// this is listening for the message from reactFileParser
window.addEventListener("message", handleMessage);

// make sure reactFileParser is appended when the DOM is loaded
// inject reactFileParser in the application after 5000ms
setTimeout(() => {
  const script = document.createElement("script");
  script.src = chrome.extension.getURL("bundles/backend.bundle.js");
  document.head.appendChild(script);
}, 5000);
