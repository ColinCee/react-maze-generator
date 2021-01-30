import React from "react";
import PropTypes from "prop-types";
import Node from "../../maze/Node";

const Cell = ({ node }): Node => {
  const style = {
    borderTop: "2px solid gray",
    borderRight: "2px solid gray",
  };

  return (
    <div className="cell" style={style}>
      {node.connections.length}
    </div>
  );
};

Cell.propTypes = {
  node: PropTypes.instanceOf(Node).isRequired,
};

export default Cell;
