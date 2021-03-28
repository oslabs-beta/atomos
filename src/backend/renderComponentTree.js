// creating a function to accept the deeply nested object
// created by getComponentNames() and convert it into an array of
// objects that can be used by React Flow in ComponentTree.jsx
//const dagre = require("dagre");

export default function renderComponentTree(node) {
  // initiate result array, which will hold all named component tree nodes
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

  // helper function to recurse through getComponentNames object and persist result, x axis, etc.
  function makeNodes(node) {
    // if current node has a name property, create a new object in results array
    if (node.name !== null) {
      yaxis = depth * 25;
      xaxis = siblingCount * 250; /// depth;
      let atom = node.atoms ? node.atoms : null;
      let selector = node.selectors ? node.selectors : null;
      // instantiate new node obj for each component and set properties according to ReactFlow style
      const obj = {
        id: node.id,
        label: node.name,
        position: {
          x: xaxis,
          y: yaxis,
        },
        atom: atom,
        selector: selector,
      };
      //obj.id = node.id.toString();
      // obj.data.label = node.name;
      // obj.position = {};
      // obj.position.x = xaxis;
      // obj.position.y = yaxis;
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
      makeNodes(node.siblings);
    }

    // if the node has a named child, we will increment the depth counter and recurse into the child
    if (node.children) {
      depth += 1;
      siblingCount = 1;
      // reassign parentID to current node ID
      if (node.name !== null) parentId = node.id;
      makeNodes(node.children);
    }
  }
  /*
  function dagreAxis(arr) {
    console.log("Array", arr);
    console.log("Array length", arr.length);
    console.log("Array.isArray? ", Array.isArray(arr));

    const g = new dagre.graphlib.Graph();
    g.setGraph({});
    g.setDefaultEdgeLabel(function () {
      return {};
    });

    arr.forEach((el) => {
      console.log("el 94", el);
      g.setNode(el.label, {
        label: el.label,
        atom: el.atom,
        selector: el.selector,
        width: 15,
        height: 15,
      });
    });

    dagre.layout(g);
    const array = [];
    g.nodes().forEach(function (v) {
      array.push({
        label: g.node(v).label,
        position: {
          x: g.node(v).x,
          y: g.node(v).y,
        },
        atom: g.node(v).atom,
        selector: g.node(v).selector,
      });
    });
    return array;//
  }
  const dagNODE = dagreAxis(result);
  */
  makeNodes(node);
  const hmmm = result.concat(result2);
  console.log("line 123", hmmm);
  return hmmm;
}
