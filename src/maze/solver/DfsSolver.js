// @flow
import Node from "../Node";

const DfsSolver = (
  graph: Node[][],
  dispatch: Function,
  start: Node,
  finish: Node
) => {
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
      .forEach((node) =>
        dispatch({ type: "UPDATE_NODE", payload: { ...node, current: false } })
      );

    dispatch({ type: "UPDATE_NODE", payload: { ...current, current: true } });

    // Found path
    if (current.id === finish.id) {
      return;
    }

    const neighbours: Node[] = (Object.values(current.connections): any);
    neighbours.forEach((neighbour) => {
      if (!visitedNodes.has(neighbour)) {
        stack.push([...path, neighbour]);
        dispatch({
          type: "UPDATE_NODE",
          payload: { ...neighbour, status: "QUEUED" },
        });
      }
    });

    visitedNodes.add(current);
    dispatch({
      type: "UPDATE_NODE",
      payload: { ...current, status: "QUEUED" },
    });
  }
};

export default DfsSolver;
