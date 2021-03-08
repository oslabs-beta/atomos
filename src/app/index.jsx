import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  console.log(tabs[0].id);
  // send a message to content.js with the tabs[0].id and request body
});

/****** CONSOLE LOGS RUN IN DEVTOOLS CONSOLE ******/
// create backend file to manifest.json to access react devtool
// console.log('react dev tools -- index.js', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

ReactDOM.render(<App />, document.getElementById('root'));
