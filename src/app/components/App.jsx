import React, { useState } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import TopNavbar from "./Navbar";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Another Node" },
    position: { x: 100, y: 125 },
  },
];
export default () => {
  /****** CONSOLE LOGS RUN IN DEVTOOLS CONSOLE ******/
  // console.log('App.jsx is loaded');
  // create backend file to manifest.json to access react devtool
  // console.log('App.jsx window', window);
  // const dev = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  // console.log('react dev tools -- App.jsx', dev);

  // console.log('chrome tabs -- App.jsx', chrome.tabs);
  // console.log('chrome -- App.jsx', chrome);

  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46} /* 'delete'-key */
      />
    </div>
  );
};
