// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

// patching / rewriting the onCommitFiberRoot functionality
dev.onCommitFiberRoot = (function (original) {
  return function (...args) {
    // grab root node of currently rendered fiber tree
    const fiberNode = args[1].current.child;
    //
    const GCN = getComponentNames(fiberNode);
    console.log(GCN);
  };
})(dev.onCommitFiberRoot);

// Creates and returns obj containing component info from rendered DOM
function getComponentNames(fiberNode) {
  //couter will be used to ID each node
  let counter = 0;
  // create a object with atom and selector keys and values will be any atom/selectors on current DOM
  const atomSelectorObj = getAtomSelector(fiberNode);

  // helper function to traverse currently rendered DOM
  const traverse = (node) => {
    // instantiating a components object to hold our conponent tree data in a deeply nested object
    let components = {};

    // conditional to check if node is a NAMED component
    if (node.type && node.type.name) {
      components.name = node.type.name;

      // if node has memoized state enter block to search for atom/selector values
      if (node.memoizedState) {
        // recusive func to traverse memoized state's linked lists
        const findAtomSelector = (currMS) => {
          // any atoms/selectors can be found in memoizedState.deps array
          if (
            typeof currMS.memoizedState === "object" &&
            !Array.isArray(currMS.memoizedState) &&
            currMS.memoizedState.deps &&
            currMS.memoizedState.deps.length
          ) {
            // key is the name of atom or selector from deps array
            const { key } = currMS.memoizedState.deps[0];
            // test if Recoil value is atom or selector
            if (atomSelectorObj.atoms.has(key)) {
              components.atoms = key;
              components.selectors = null;
            } else {
              components.selectors = key;
              components.atoms = null;
            }
          }
          // else current memoized state does not have valid deps
          else {
            // if not at end of memoizedState linked list recurse with next
            if (currMS.next) {
              findAtomSelector(currMS.next);
              // end of memoized state linked list is reached no atom/selector is found
            } else {
              components.atoms = null;
              components.selectors = null;
            }
          }
        };
        // inital invocation of function with memostate
        findAtomSelector(node.memoizedState);
        // node does not have memoizedState therefore no atom or selector on node
      } else {
        components.atoms = null;
        components.selectors = null;
      }
      // node is NOT named component
    } else components.name = null;

    // set component obj values
    components.id = ++counter;
    components.siblings;
    components.children;
    // check if node has sibling or child and recurse on sibling and child
    if (node.sibling) {
      components.siblings = traverse(node.sibling);
    }
    if (node.child) {
      components.children = traverse(node.child);
    }
    return components;
  };
  return traverse(fiberNode);
}

function getAtomSelector(fiberNode) {
  // object will store our known atoms and selctors when found in memoizedState
  const atomSelectors = {
    atoms: null,
    selectors: null,
  };

  // helper function to recursivly search memoizedState to find knownAtoms and knownSelectors
  const traverse = (node) => {
    // test if memoized state !== null and has a current property with knownAtoms
    if (
      node.memoizedState &&
      node.memoizedState.current.hasOwnProperty("knownAtoms")
    ) {
      // assign values in atomSelector obj when atoms and selectors are found
      atomSelectors.atoms = node.memoizedState.current.knownAtoms;
      atomSelectors.selectors = node.memoizedState.current.knownSelectors;
      console.log("FOUND ATOMS!!!", atomSelectors);
    } else {
      // recursively call traverse with memoized.next obj
      traverse(node.next);
    }
  };
  // invoke helper func to assign atoms and selectors to atomSelector object
  fiberNode.memoizedState
    ? traverse(fiberNode.memoizedState)
    : traverse(fiberNode.child.memoizedState);
  return atomSelectors;
}
