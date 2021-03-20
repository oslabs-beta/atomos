
// creating a function to accept the deeply nexted object 
// created by getComponentNames() and convert it into an array of 
// objects that can be used by React Flow in ComponentTree.jsx
export function renderComponentTree(node) {
  // instiantating our result array, which will hold all named component tree nodes
  const result = [];
  let xaxis = 0;
  let yaxis = 1;
  // depth is tracking how many levels deep we are so that we can orient nodes on the y-axis correctly
  let depth = 1;
  let siblingCount = 1;

  // recursive helper function that will allow us to recurse through the getComponentNames object while persisting result, xaxis, etc.
  function makeNodes(node) {
    // if the current node has a name property other than null, we will create a new element in result (in the form of an object)
    if (node.name !== null) {
      yaxis = depth * 100;
      xaxis = siblingCount * 300 / depth;
      // instantiating a new node object for each component and setting its properties according to ReactFlow style
      const obj = {};
      obj.id = node.id.toString();
      obj.data = {};
      obj.data.label = node.name;
      obj.position = {};
      obj.position.x = xaxis;
      obj.position.y = yaxis;
      result.push(obj);
    }

    // if the node has a sibling, we wil increment sibling count and recurse into the sibling
    if (node.siblings) {
      siblingCount += 1;
      return makeNodes(node.siblings);
    }

    // if the node has a named child, we will increment the depth counter and recurse into the child
    if (node.children && node.children.name !== null) {
      depth += 1;
      // console.log('where the dep var is', depth);
      return makeNodes(node.children);
    }

    // if node has an unnamed child, recurse into that child without incrementing depth.
    // unnamed children are HTML elements that hold components within them, but are not components themselves
    if (node.children) {
      console.log('where node.children is');
      return makeNodes(node.children);
    }
    return result;
  }
  return makeNodes(node);
}
