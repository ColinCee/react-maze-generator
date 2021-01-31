import _ from "lodash";
import Node from "../Node";

const Dfs = (start: Node) => {
  const visitedNodes = new Set();
  const stack: Node[] = [];

  stack.push(start);
  visitedNodes.add(start);

  while (stack.length > 0) {
    const current = stack.pop();
    const unvisitedNeighbours = Object.values(current.connections).filter(
      (node) => !visitedNodes.has(node)
    );
    if (unvisitedNeighbours.length === 0) {
      continue;
    }
    const neighbour =
      unvisitedNeighbours[_.random(0, unvisitedNeighbours.length - 1)];
    stack.push(current);

    current.removeWall(neighbour);
    neighbour.removeWall(current);
    visitedNodes.add(neighbour);
    stack.push(neighbour);
  }
};

export default Dfs;
