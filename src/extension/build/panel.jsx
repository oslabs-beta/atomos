// const root = document.getElementById("root");
// root.innerHTML = "biiiiitch";
import React from "react";
import ReactFlow from "react-flow-renderer";

const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 },
  },
  // you can also pass a React Node as a label
  { id: "2", data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: "e1-2", source: "1", target: "2", animated: true },
];
export default () => <ReactFlow elements={elements} />;

// import React, { useState } from "react";
// import ReactFlow, {
//   removeElements,
//   addEdge,
//   MiniMap,
//   Controls,
//   Background,
// } from "react-flow-renderer";
// import initialElements from "./initial-elements";

// const onLoad = (reactFlowInstance) => {
//   console.log("flow loaded:", reactFlowInstance);
//   reactFlowInstance.fitView();
// };
// const OverviewFlow = () => {
//   const [elements, setElements] = useState(initialElements);
//   const onElementsRemove = (elementsToRemove) =>
//     setElements((els) => removeElements(elementsToRemove, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));
//   return (
//     <ReactFlow
//       elements={elements}
//       onElementsRemove={onElementsRemove}
//       onConnect={onConnect}
//       onLoad={onLoad}
//       snapToGrid={true}
//       snapGrid={[15, 15]}
//     >
//       <MiniMap
//         nodeStrokeColor={(n) => {
//           if (n.style?.background) return n.style.background;
//           if (n.type === "input") return "#0041d0";
//           if (n.type === "output") return "#ff0072";
//           if (n.type === "default") return "#1a192b";
//           return "#eee";
//         }}
//         nodeColor={(n) => {
//           if (n.style?.background) return n.style.background;
//           return "#fff";
//         }}
//         nodeBorderRadius={2}
//       />
//       <Controls />
//       <Background color="#aaa" gap={16} />
//     </ReactFlow>
//   );
// };
// export default OverviewFlow;
