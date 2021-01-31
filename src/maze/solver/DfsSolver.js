// @flow
import Node from "../Node";

const DfsSolver = (graph: Node[][], start: Node, finish: Node) => {
  const visitedNodes = new Set();
  const stack: Node[][] = [];

  stack.push([start]);

  while (stack.length > 0) {
    const path = stack.pop();
    const current = path[path.length - 1];
    // unmark others from current
    graph
      .flat()
      .filter((node) => node.id === current.id)
      .forEach((node) => node.setIsCurrent(false));

    current.setIsCurrent(true);

    // Found path
    if (current.id === finish.id) {
      return;
    }

    const neighbours: Node[] = (Object.values(current.connections): any);
    neighbours.forEach((neighbour) => {
      if (!visitedNodes.has(neighbour)) {
        stack.push([...path, neighbour]);
        neighbour.setStatus("QUEUED");
      }
    });

    visitedNodes.add(current);
    current.setStatus("VISITED");
  }
};

export default DfsSolver;
