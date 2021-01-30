import React from "react";
import PropTypes from "prop-types";
import Node from "../../maze/Node";

const Cell = ({ node }): Node => (
  <div className="cell">{node.connections.length}</div>
);

Cell.propTypes = {
  node: PropTypes.instanceOf(Node).isRequired,
};

export default Cell;
