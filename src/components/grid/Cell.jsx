import React from "react";
import type { Node } from "../../maze/Node";

type Props = {
  node: Node,
};

const generateWallStyles = (node: Node) => {
  const style = {};
  if (node.walls.N) {
    style.borderTop = "2px solid gray";
  }

  if (node.walls.E) {
    style.borderRight = "2px solid gray";
  }

  if (!node.connections.W) {
    style.borderLeft = "2px solid gray";
  }

  if (!node.connections.S) {
    style.borderBottom = "2px solid gray";
  }
  return style;
};

const generateBackgroundStyle = (node: Node) => {
  const style = {};
  if (node.status === "VISITED") {
    style.backgroundColor = "#616161";
  }

  if (node.status === "QUEUED") {
    style.backgroundColor = "#1976d2";
  }

  return style;
};

const Cell = ({ node }: Props) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...generateWallStyles(node),
    ...generateBackgroundStyle(node),
  };
  return (
    <div className="cell" style={style}>
      {node.isCurrent && (
        <div
          style={{
            width: "25%",
            height: "25%",
            borderRadius: "50%",
            backgroundColor: "#ffc107",
          }}
        />
      )}
    </div>
  );
};

export default Cell;
