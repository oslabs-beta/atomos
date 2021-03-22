

/** ******** !!NEW CODE!! ******** * */




export default function renderPositions(array) {
  const output = [];

  // instantiate object to store nodes that are on the same y-axis together
  // object key will be a y-coordinate
  // object value will be an array of nodes that share the same y-coordinate
  const sameLevel = {};
  // iterate through the tree array
  for (let i = 1; i < array.length; i += 1) {
    // if the current node's y position matches the previous node's y position
    if (array[i].position.y === array[i - 1].position.y) {
      // stringify the y position
      const position = array[i].position.y.toString();
      // check if the y position exists as a key in the sameLevel object
      // if key exists, push the node to its array
      if (sameLevel[position]) {
        sameLevel[position].push(array[i]);
      } else {
        // if key doesn't exist, instantiate a new array and insert previous and current node
        sameLevel[position] = [array[i - 1], array[i]];
      }
    }
  }

  console.log('same level array', sameLevel);

  // create keys variable using Object.keys to create an array of sameLevel's keys
  const keys = Object.keys(sameLevel);
  // iterate through each key (y-position) aka level
  keys.forEach((level) => {
    console.log('samelevel[level]', sameLevel[level]);

    // arr is the array which holds all nodes that share the same y-coordinate)
    const arr = sameLevel[level];
    // siblingCount is the length of the arr which is the # of nodes that are at the same y-coord
    const siblingCount = arr.length;
    // instantiate a y-coordinate position for the first node at this level
    let position = 60;
    // for each node, reassign the x position to the position variable
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].position.x = position;
      // increment the position by 600 divided by the sibling count to space out the nodes evenly
      // 600 was hard-coded in; we can change the number to whatever width we'd like
      position += 800 / siblingCount;
    }
  });

  console.log('sameLevel altered', sameLevel);

  // nothing is being returned at the moment
  return output;
}

/** ******** !!NEW CODE!! ******** * */
// initially created this file as a renderConnections function
// to create node connection lines using parent and child IDs passed in
// from the renderComponentTree file

// export default function renderConnections(parent, child) {
//   const output = {};
//   output.id = `e${parent}-${child}`;
//   output.source = `${parent}`;
//   output.target = `${child}`;
// }

// { id: 'e1-2', source: '1', target: '2' },
// { id: 'e2-3', source: '2', target: '3' },
