// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

console.log('hello from backend folder');
console.log('devtool backend', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

function please() {
  console.log('devtool backend function', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
}

please();
