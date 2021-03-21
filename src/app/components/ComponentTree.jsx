import React, { useState, useEffect } from "react";
const port = chrome.runtime.connect({ name: "Atomos" });

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Handle,
} from "react-flow-renderer";

// TO DO: change importtstatement to ree Data
import initialElements from "./initial-elements";

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const ComponentTree = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  // Rece ived fiber node state changes from reactFileParser
  useEffect(() => {
    // establish a connection between devtools and background page
    port.postMessage({
      name: "connect",
      tabId: chrome.devtools.inspectedWindow.tabId,
    });
    // console.log('tab ID from App.jsx', chrome.devtools.inspectedWindow.tabId);
    console.log("hitting line 35 in comptree.jsx for port");
    //saving data to ReactfileParser
    port.onMessage.addListener((message) => {
      console.log("setting tree");
      console.log("Message tree in COMPTREE.jsx line 39:", message);
      setElements(message);
    });
  }, []);

  return (
    <div style={{ height: "92.5vh" }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid
        snapGrid={[15, 15]}
      >
        <Handle style={{ color: "#1a192b" }} />
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#1a192b";
            if (n.type === "default") return "#1a192b";
            return "#eee";
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return "#fff";
          }}
          nodeBorderRadius={1}
        />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ComponentTree;

/** **** CONSOLE LOGS RUN IN DEVTOOLS CONSOLE ***** */
// console.log('App.jsx is loaded');
// create backend file to manifest.json to access react devtool
// console.log('App.jsx window', window);
// const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
// console.log('react dev tools -- App.jsx', dev);

// console.log('chrome tabs -- App.jsx', chrome.tabs);
// console.log('chrome -- App.jsx', chrome);
