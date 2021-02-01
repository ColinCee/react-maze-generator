// @flow
import React, { useContext } from "react";
import type { Node } from "react";
import "./Grid.css";
import Cell from "./Cell";
import { MazeContext } from "../../store/MazeContext";

const Grid = (): Node => {
  const { state } = useContext(MazeContext);
  const { numRows } = state;

  const cells = state.graph
    .flat()
    .map((node) => <Cell key={node.id} node={node} />);

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
