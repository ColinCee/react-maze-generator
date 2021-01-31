// @flow
import React, { useContext } from "react";
import type { Node } from "react";
import "./Grid.css";
import GraphGenerator from "../../maze/generator/GraphGenerator";
import Cell from "./Cell";
import { MazeContext } from "../../store/MazeContext";

const Grid = (): Node => {
  const { state } = useContext(MazeContext);
  const { numRows } = state;
  const graphGenerator = new GraphGenerator();
  const graph = graphGenerator.generate(numRows, numRows);

  const cells = graph.flat().map((node) => <Cell key={node.id} node={node} />);

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${numRows}, 1fr)`,
        gridAutoRows: "1fr",
      }}
    >
      {cells}
    </div>
  );
};

export default Grid;
