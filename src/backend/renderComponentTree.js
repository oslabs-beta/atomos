// creating a function to accept the deeply nexted object
// created by getComponentNames() and convert it into an array of
// objects that can be used by React Flow in ComponentTree.jsx

export default function renderComponentTree(node) {
  // instiantate result array, which will hold all named component tree nodes
  const result = [];
  // instantiate result2 array, which will hold all edges (lines that connect nodes)
  const result2 = [];
  let xaxis = 0;
  let yaxis = 1;
  // depth tracks how many levels deep we are so we can orient nodes on the y-axis correctly
  let depth = 1;
  let siblingCount = 1;
  // parentId holds current parent node to create edges (connecting lines) between components
  let parentId = null;

  // helper function to recurse through getComponentNames object and persist result, xaxis, etc.
  function makeNodes(node) {
    // if current node has a name property, create a new object in results array
    if (node.name !== null) {
      yaxis = depth * 100;
      xaxis = siblingCount * 250; // 300 / depth;
      // instantiate new node obj for each component and set properties according to ReactFlow style
      const obj = {};
      obj.id = node.id.toString();
      obj.data = {};
      obj.data.label = node.name;
      obj.position = {};
      obj.position.x = xaxis;
      obj.position.y = yaxis;
      obj.atom = node.atoms ? node.atoms : null;
      obj.selector = node.selectors ? node.selectors : null;
      result.push(obj);

      // if current node is the root component (obj.id is 1)
      if (obj.id === "1") {
        // set ReactFlow node style to input
        obj.type = "input";
        // set parentID to root node
        parentId = obj.id;
      }

      // edge functionality to create connecting lines between parent and child components
      if (node.id > 1) {
        const edge = {};
        edge.id = `e${parentId}-${node.id}`;
        edge.source = parentId.toString();
        edge.target = node.id.toString();

        // edge.animated = true;
        edge.style = { stroke: "#838383" };
        result2.push(edge);
      }
    }

    // if the node has a sibling, we wil increment sibling count and recurse into the sibling
    if (node.siblings) {
      siblingCount += 1;
      return makeNodes(node.siblings);
    }

    // if the node has a named child, we will increment the depth counter and recurse into the child
    if (node.children && node.children.name !== null) {
      depth += 1;
      siblingCount = 1;
      // reassign parentID to current node ID
      if (node.name !== null) parentId = node.id;
      return makeNodes(node.children);
    }

    // if node has an unnamed child, recurse into that child without incrementing depth
    // unnamed children are HTML elements that hold components within them, but are not components themselves
    if (node.children) {
      siblingCount = 1;
      // reassign parentID to current node ID
      if (node.name !== null) parentId = node.id;
      return makeNodes(node.children);
    }
    // concatenate both result arrays to create ReactFlow data w/ component and edge info
    return result.concat(result2);
  }

  return makeNodes(node);
}
