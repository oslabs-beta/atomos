/*
  We use dagre to calculate the the x and y postion of each node and take calucations
  to format our node into react flow syntax and include calucuated x/y position
*/

const dagre = require("dagre");

export default function dagreLayout(arr, arr2) {
  // create new instance of dagre graph
  const g = new dagre.graphlib.Graph();

  // set empty edgeLabel, we will only not be using this obj
  // just need for node calculations
  g.setDefaultEdgeLabel(function () {
    return {};
  });

  // create the horizontal seperation of nodes
  g.setGraph({
    nodesep: 75,
  });

  // iterate through arr and format each node
  arr.forEach((el) => {
    g.setNode(el.id.toString(), {
      id: el.id,
      data: { label: el.data.label },
      atom: el.atom,
      selector: el.selector,
      width: 100,
      height: 50,
    });
  });

  // set edge we will not be needing edge info just need for node calc
  arr2.forEach((el) => {
    g.setEdge(el.source, el.target);
  });

  // this calculates overall graph info but we only need x/y position
  dagre.layout(g);

  // will be returning with new node format and NEEDED X/Y POSITION!
  const array = [];

  // iterate through nodes and push React flow formatted nodes with dagre calculated x/y pos
  g.nodes().forEach(function (v) {
    array.push({
      id: g.node(v).id,
      data: { label: g.node(v).data.label },
      position: {
        x: g.node(v).x,
        y: g.node(v).y,
      },
      atom: g.node(v).atom,
      selector: g.node(v).selector,
    });
  });

  return array;
}
