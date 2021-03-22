// Full access to extensions APIs
// communicates with content scripts and App.jsx

console.log('background.js is loaded');
const connections = {};

// content script is injected here when dev tools are opened
chrome.runtime.onConnect.addListener((port) => {
  // create a new variable for a listener function

  const listenerForDevtool = (msg, sender, sendResponse) => {
    // creates a new key/value pair of current window & devtools tab
    if (msg.name === 'connect' && msg.tabId) {
      connections[msg.tabId] = port;
    }
  };
  // Listen from App.jsx
  // consistently listening on open port
  port.onMessage.addListener(listenerForDevtool);
  console.log('Listing from devtool successfully made');

  // if the port is disconnected, handle it here
  port.onDisconnect.addListener((port) => {
    port.onMessage.removeListener(listenerForDevtool);
    console.log('successfully removeListener');
    const tabs = Object.keys(connections);
    for (let i = 0; i < tabs.length; i++) {
      if (connections[tabs[i]] === port) {
        delete connections[tabs[i]];
        break;
      }
    }
  });
});

// Receives message from content.js and checks for valid connections before posting tree data to App.jsx
chrome.runtime.onMessage.addListener((request, sender) => {
  if (sender.tab) {
    const tabId = sender.tab.id.toString();
    if (tabId in connections) {
      // request body consists of tree data that was sent from content.js
      connections[tabId].postMessage(request);
    } else console.log('Tab not found');
  } else console.log('sender.tab is not defined');
  return Promise.resolve('dummy response to keep the console quiet');
});

// on every page reloads, injects the content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (connections[tabId]) {
    chrome.tabs.executeScript({
      file: '../content.js',
    });
  }
});
