// @flow
import React from "react";
import type { Node } from "react";
import "./Grid.css";

export default (): Node => {
  const numRows = 4;
  const cells = [];
  for (let i = 0; i < numRows ** 2; i += 1) {
    // rows
    cells.push(i);
  }

  return (
    <div
      className="grid"
      style={{
        "grid-template-columns": `repeat(${numRows}, 1fr)`,
        "grid-template-rows": `repeat(${numRows}, 50px)`,
      }}
    >
      {cells.map((cellNum) => (
        <div id={cellNum} className="cell" />
      ))}
    </div>
  );
};
