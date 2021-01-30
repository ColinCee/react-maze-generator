import React from "react";
import PropTypes from "prop-types";
import Node from "../../maze/Node";

type Props = {
  node: Node,
};

const Cell = ({ node }: Props) => {
  const style = {};
  if (node.walls.N) {
    style.borderTop = "2px solid gray";
  }

  if (node.walls.E) {
    style.borderRight = "2px solid gray";
  }
  return <div className="cell" style={style} />;
};

Cell.propTypes = {
  node: PropTypes.instanceOf(Node).isRequired,
};

export default Cell;
