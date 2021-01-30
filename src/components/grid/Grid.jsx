// @flow
import React from "react";
import type { Node } from "react";
import "./Grid.css";
import GraphGenerator from "../../maze/GraphGenerator";
import Cell from "./Cell";

export default (): Node => {
  const numRows = 75;
  const graphGenerator = new GraphGenerator();
  const graph = graphGenerator.generate(numRows, numRows);

  const cells = graph.flat().map((node) => <Cell key={node.id} node={node} />);

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${numRows}, 10px)`,
        gridTemplateRows: `repeat(${numRows}, 10px)`,
      }}
    >
      {cells}
    </div>
  );
};
