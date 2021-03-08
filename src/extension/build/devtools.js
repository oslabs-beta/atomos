// creates chrome devtools panel
chrome.devtools.panels.create(
  'Atomos™',
  './assets/projectLogoNoCoil.png',
  'panel.html',
);

/****** CONSOLE LOGS RUN IN DEVTOOLS CONSOLE ******/
// create backend file to manifest.json to access react devtool
// console.log('react dev tools -- devtools.js', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

// console.log('chrome tabs -- devtoolsjs', chrome.tabs);
// console.log('chrome -- devtoolsjs', chrome);
