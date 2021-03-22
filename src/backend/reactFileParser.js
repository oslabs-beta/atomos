import getComponentNames from './getComponentNames';
import renderComponentTree from './renderComponentTree';

// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

// retrieving React app data from the window via React Devtools
const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

// patching / rewriting the onCommitFiberRoot functionality
dev.onCommitFiberRoot = (function (original) {
  return function (...args) {
    // grab root node of currently rendered fiber tree
    const fiberNode = args[1].current.child;
    // create component tree obj with atom/selector relationships
    const GCN = getComponentNames(fiberNode);
    // convert getComponentNames data into array of objects that ReactFlow can read
    const treeNodes = renderComponentTree(GCN);
    // invoke sendToContentScript to send treeNode data to the front end
    sendToContentScript(treeNodes);
  };
}(dev.onCommitFiberRoot));

// sends the array with tree data to content.js
function sendToContentScript(fiberTree) {
  const tree = JSON.parse(JSON.stringify(fiberTree));
  window.postMessage({ tree }, '*');
}
