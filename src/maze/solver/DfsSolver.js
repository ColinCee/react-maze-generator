// @flow
import type { Node } from "../Node";

import { getVisibleConnections } from "../Node";

// Returns a Promise that resolves after "ms" Milliseconds
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

/* eslint-disable no-await-in-loop */
const DfsSolver = async (
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
    graph.flat().forEach((node) =>
      dispatch({
        type: "UPDATE_NODE",
        payload: {
          id: node.id,
          isCurrent: path.find((el) => el.id === node.id),
        },
      })
    );

    await timer(100);

    // Found path
    if (current.id === finish.id) {
      dispatch({
        type: "UPDATE_NODE",
        payload: { id: current.id, status: "VISITED" },
      });
      console.log(path);
      return;
    }

    const neighbours: Node[] = (Object.values(
      getVisibleConnections(current)
    ): any);
    neighbours.forEach((neighbour) => {
      if (!visitedNodes.has(neighbour)) {
        stack.push([...path, neighbour]);
        dispatch({
          type: "UPDATE_NODE",
          payload: { id: neighbour.id, status: "QUEUED" },
        });
      }
    });

    visitedNodes.add(current);
    dispatch({
      type: "UPDATE_NODE",
      payload: { id: current.id, status: "VISITED" },
    });
  }
};

export default DfsSolver;
