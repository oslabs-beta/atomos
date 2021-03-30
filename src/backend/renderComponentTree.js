// creating a function to accept the deeply nested object
// created by getComponentNames() and convert it into an array of
// objects that can be used by React Flow in ComponentTree.jsx
import dagreLayout from "./dagreLayout";

export default function renderComponentTree(node) {
  // initiate result array, which will hold all named component tree nodes
  const result = [];
  // instantiate result2 array, which will hold all edges (lines that connect nodes)
  const result2 = [];

  // parentId holds current parent node to create edges (connecting lines) between components
  let parentId = null;

  // helper function to recurse through getComponentNames object and persist result, x axis, etc.
  function makeNodes(node) {
    // if current node has a name property, create a new object in results array
    if (node.name !== null) {
      let atom = node.atoms ? node.atoms : null;
      let selector = node.selectors ? node.selectors : null;
      // instantiate new node obj for each component and set properties according to ReactFlow style
      const obj = {
        id: node.id.toString(),
        data: { label: node.name },
        position: {
          x: 0,
          y: 0,
        },
        atom: atom,
        selector: selector,
      };
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
      makeNodes(node.siblings);
    }

    // if the node has a named child, we will increment the depth counter and recurse into the child
    if (node.children) {
      if (node.name !== null) parentId = node.id;
      makeNodes(node.children);
    }
  }

  makeNodes(node);

  // use dagre to format nodes x/y positions
  const dagre = dagreLayout(result, result2);

  // concat dagre node layout with React flow relation array from result2
  return dagre.concat(result2);
}
