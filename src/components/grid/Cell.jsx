import React from "react";
import PropTypes from "prop-types";
import Node from "../../maze/Node";

type Props = {
  node: Node,
};

const Cell = ({ node }: Props) => {
  console.log(node.walls);
  const style = {};
  if (node.walls.N) {
    style.borderTop = "2px solid gray";
  }

  if (node.walls.E) {
    style.borderRight = "2px solid gray";
  }
  return (
    <div className="cell" style={style}>
      {Object.keys(node.connections).length}
    </div>
  );
};

Cell.propTypes = {
  node: PropTypes.instanceOf(Node).isRequired,
};

export default Cell;
