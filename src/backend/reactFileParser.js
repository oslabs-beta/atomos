// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

// console.log("hello from backend folder");
// console.log("devtool backend", window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
const fiber = dev.getFiberRoots(1);

// console.log('',dev.onCommitFiberRoot);

// patching / rewriting the onCommitFiberRoot functionality
dev.onCommitFiberRoot = (function (original) {
  console.log("OGGGGGGGG", original);
  return function (...args) {
    // console.log("reactFileParser.js line 24 ARGS:", args);
    const fiberNode = args[1].current.child;
    console.log("fiberNode", fiberNode);
    // const nodeName = fiberNode.type.name;
    // console.log("root node", nodeName);
    console.log("getComponentNames:", getComponentNames(fiberNode));
    let parsedData = getComponentNames(fiberNode);
    let reactFlowNodes = renderComponentTree(parsedData);
    // console.log("renderComponentTree:", renderComponentTree(whatever));
    // console.log('REACT FLOW NODES AAAAAA:', idk);
  };
}(dev.onCommitFiberRoot));

console.log("after change", dev.onCommitFiberRoot);

// function that creates an object for each node

let counter = 0;

const getComponentNames = (node) => {
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
    console.log(node)
  }
  return components;
}

// we're going to accept the data created by getComponentNames, and then
// we will recursively parse through that data to create the node element data
// that React Flow needs. We will then pass that data to ComponentTree.js

// create an empty array : needs to be exported at the end for React Flow 
// we are receving the data from getComponentNames
// {id: 0, name:abc , children: {}}
// The expected data structure for React Flow [{id: 0, data: {label: }, position: {}}]

function renderComponentTree(node) {
  
  let result = [];
  let xaxis = 0;
  let yaxis = 0;
  let depth = 1;
  let siblingCount = 1;
  
  function makeNodes(node) {
    if (node.name !== null) {
      yaxis += 100;
      xaxis = siblingCount * 300 / depth;
      let obj = {};
      obj.id = node.id.toString();
      obj.data = {};
      obj.data.label = node.name;
      obj.position = {};
      obj.position.x = xaxis;
      obj.position.y = yaxis;
      result.push(obj);
      console.log('this is the obj', obj);
      console.log('this is the result', result);
      
    }
    console.log('Helloooo is it working? ');
    if (node.children && node.children.name !== null) {
      depth += 1;
      console.log('where the dep var is', depth);
      return makeNodes(node.children);
      
      
    }
    
    if (node.siblings) {
      siblingCount += 1;
      console.log('where the siblingCount var is', siblingCount);
      return makeNodes(node.siblings);
    }

    if (node.children) {
      console.log('where node.children is');
      return makeNodes(node.children);
    }
    return result;
  }
  return makeNodes(node);
}
const reactFlowNodes = renderComponentTree(whatever);

module.exports = { reactFlowNodes };

// console.log('REACT FLOW NODES:', reactFlowNodes);
// reactFlowNodes();
