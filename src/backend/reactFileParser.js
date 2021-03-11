// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

console.log('hello from backend folder');
console.log('devtool backend', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

function please() {
  console.log('devtool backend function', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
}

please();

const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
const fiber = dev.getFiberRoots(1);

console.log(dev.onCommitFiberRoot);

// patching / rewriting the onCommitFiberRoot functionality
dev.onCommitFiberRoot = (function (original) {
  return function (...args) {
    const fiberNode = args[1].current.child;
    console.log('fiberNode', fiberNode);
    const nodeName = fiberNode.type.name;
    console.log('root node', nodeName);
    getComponentNames(fiberNode);
  };
})(dev.onCommitFiberRoot);

console.log('after change', dev.onCommitFiberRoot);

// function that creates an object for each node

const components = [];
function getComponentNames(node) {
  components.push(node.type.name);
  if (node.child) {
    getComponentNames(node.child);
  }
  if (node.sibling) {
    // some code here
    getComponentNames(node.sibling);
  }
}
console.log('component names', components);
