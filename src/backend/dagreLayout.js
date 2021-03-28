const dagre = require("dagre");

const g = new dagre.graphlib.Graph();

// Set an object for the graph label
g.setGraph({});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function () {
  return {};
});
g.setNode("kspacey", { label: "Kevin Spacey", width: 15, height: 15 });
g.setNode("swilliams", { label: "Saul Williams", width: 15, height: 15 });
g.setNode("bpitt", { label: "Brad Pitt", width: 15, height: 15 });
g.setNode("hford", { label: "Harrison Ford", width: 15, height: 15 });
g.setNode("lwilson", { label: "Luke Wilson", width: 15, height: 15 });
g.setNode("kbacon", { label: "Kevin Bacon", width: 15, height: 15 });

// Add edges to the graph.
g.setEdge("kspacey", "swilliams");
g.setEdge("swilliams", "kbacon");
g.setEdge("bpitt", "kbacon");
g.setEdge("hford", "lwilson");
g.setEdge("lwilson", "kbacon");

/*  
Next we can ask dagre to do the layout for these nodes and edges.
This is done with the following code:
*/
dagre.layout(g);
g.nodes().forEach((v) => {
  let obj = {
    atom: null,
    data: {
      label: g.node(v).label,
    },
    position: {
      x: g.node(v).x,
      y: g.node(v).y,
    },
    selector: null,
    type: "input",
  };
  console.log(obj);
});
g.edges().forEach(function (e) {
  console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
});
