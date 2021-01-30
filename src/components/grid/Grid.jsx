// @flow
import React from "react";
import type { Node } from "react";
import "./Grid.css";
import GraphGenerator from "../../maze/GraphGenerator";
import Cell from "./Cell";

export default (): Node => {
  const numRows = 4;
  const graphGenerator = new GraphGenerator();
  const graph = graphGenerator.generate(numRows, numRows);
  const cells = graph.flat().map((node) => <Cell key={node.id} node={node} />);
  
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${numRows}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 50px)`,
      }}
    >
      {cells}
    </div>
  );
};
