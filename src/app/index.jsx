import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  console.log("tab ID from index.jsx", tabs[0].id);
  // send a message to content.js with the tabs[0].id and request body
  chrome.tabs.sendMessage(
    tabs[0].id,
    { message: "get-react-data" },
    (response) => {
      console.log("sent tabs query from index.jsx");
    }
  );
});

/** **** CONSOLE LOGS RUN IN DEVTOOLS CONSOLE ***** */
// console.log('index.jsx is loaded');
// create backend file to manifest.json to access react devtool
// console.log('index.jsx window', window);
// const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
// console.log('react dev tools -- index.js', dev);

ReactDOM.render(<App />, document.getElementById("root"));
