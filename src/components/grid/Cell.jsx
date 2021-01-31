import React from "react";
import PropTypes from "prop-types";
import Node from "../../maze/Node";

type Props = {
  node: Node,
};

const generateStyle = (node: Node) => {
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
const Cell = ({ node }: Props) => (
  <div className="cell" style={generateStyle(node)} />
);

Cell.propTypes = {
  node: PropTypes.instanceOf(Node).isRequired,
};

export default Cell;
