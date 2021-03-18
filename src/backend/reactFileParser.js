// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

console.log("hello from backend folder");
console.log("devtool backend", window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

function please() {
  console.log(
    "devtool backend function",
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__
  );
}

please();

const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
const fiber = dev.getFiberRoots(1);

// console.log('',dev.onCommitFiberRoot);

// patching / rewriting the onCommitFiberRoot functionality
dev.onCommitFiberRoot = (function (original) {
  console.log("OGGGGGGGG", original);
  return function (...args) {
    console.log("reactFileParser.js line 24 ARGS:", args);
    const fiberNode = args[1].current.child;
    console.log("fiberNode", fiberNode);
    // const nodeName = fiberNode.type.name;
    // console.log("root node", nodeName);
    console.log("getComponentNames:", getComponentNames(fiberNode));
    getComponentNames(fiberNode);
  };
})(dev.onCommitFiberRoot);

console.log("after change", dev.onCommitFiberRoot);

// function that creates an object for each node

let counter = 0;
function getComponentNames(node) {
  // instantiating a components object to hold our conponent tree data in a deeply nested object
  let components = {};
  components.id = counter;
  // conditional to check if node.type is null
  components.name =
    node.type !== null && node.type.name ? node.type.name : null;
  components.siblings;
  components.children;
  counter++;
  if (node.sibling) {
    components.siblings = getComponentNames(node.sibling);
  }
  if (node.child) {
    components.children = getComponentNames(node.child);
  }
  return components;
}
