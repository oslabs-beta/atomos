import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Handle,
} from 'react-flow-renderer';

let reactFlowNodes = require('../../backend/reactFileParser');
console.log("THIS IS REACTFLOWNODES IN COMPONENT TREE:", reactFlowNodes);

const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const ComponentTree = () => {
  const [elements, setElements] = useState(reactFlowNodes);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div style={{ height: '92.5vh' }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid
        snapGrid={[15, 15]}
      >
        <Handle style={{ color: '#1a192b' }} />
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#1a192b';
            if (n.type === 'default') return '#1a192b';
            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return '#fff';
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
