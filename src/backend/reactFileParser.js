import { getComponentNames } from "./getComponentNames";

// backend folder is referenced in manifest as a web accessible resource
// script is injected into content.js so it can be ran there

const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

// patching / rewriting the onCommitFiberRoot functionality
dev.onCommitFiberRoot = (function (original) {
  return function (...args) {
    // grab root node of currently rendered fiber tree
    const fiberNode = args[1].current.child;
    // create component tree obj with atom/selector relationships
    const GCN = getComponentNames(fiberNode);
    console.log(GCN);
  };
})(dev.onCommitFiberRoot);
