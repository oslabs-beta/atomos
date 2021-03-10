// creates chrome devtools panel
chrome.devtools.panels.create(
  'Atomos™',
  './assets/projectLogoNoCoil.png',
  'panel.html',
);

/** **** CONSOLE LOGS RUN IN DEVTOOLS CONSOLE ***** */
// console.log('devtools.js is loaded');
// create backend file to manifest.json to access react devtool
// const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
// console.log('react dev tools -- devtools.js', dev);

// console.log('chrome tabs -- devtoolsjs', chrome.tabs);
// console.log('chrome -- devtoolsjs', chrome);
