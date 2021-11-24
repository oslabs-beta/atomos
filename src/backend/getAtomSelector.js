/*
  Every Recoil app will contain a SET of knownAtoms and knownSelectors properties in the
  memoizedState linked list values. If there are no atoms or selectors used in app
  knownAtoms and knownSelectors value will be null.
*/

// Creates Object to find atom/selectors on rendered DOM
export default function getAtomSelector(fiberNode) {
  // object will store our known atoms and selectors when found in memoizedState
  const atomSelectors = {
    atoms: null,
    selectors: null,
  };

  // helper function to recursively search memoizedState to find knownAtoms and knownSelectors
  const traverse = (node) => {
    // test if memoized state !== null and has a current property with knownAtoms
    if (
      node.memoizedState &&
      node.memoizedState.current &&
      node.memoizedState.current.hasOwnProperty("knownAtoms")
    ) {
      // assign values in atomSelector obj when atoms and selectors are found
      atomSelectors.atoms = node.memoizedState.current.knownAtoms;
      atomSelectors.selectors = node.memoizedState.current.knownSelectors;
    } else {
      // recursively call traverse with memoized.next obj
      traverse(node.next);
    }
  };

  // invoke helper func to assign atoms and selectors to atomSelector object
  let fiberNodeWithState = fiberNode;
  while (!fiberNodeWithState.memoizedState) {
    fiberNodeWithState = fiberNodeWithState.child;
  }
  if (fiberNodeWithState.memoizedState) {
    traverse(fiberNodeWithState.memoizedState);
  }
  if (atomSelectors.atoms === null) {
    console.log(fiberNode)
    throw new Error('No FiberNode with memoized state found')
  }

  return atomSelectors;
}
