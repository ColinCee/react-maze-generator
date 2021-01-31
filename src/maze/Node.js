// @flow
type Direction = "N" | "E" | "S" | "W";
// GRAY, WHITE, BLUE
type Status = "VISITED" | "UNVISITED" | "QUEUED";
export type Node = {
  id: number,

  connections: { N?: Node, E?: Node, S?: Node, W?: Node },

  walls: { N: boolean, E: boolean, S: boolean, W: boolean },

  status: Status,

  isCurrent: boolean,
};

export const createNode = (id: number): Node => ({
  id,
  connections: {},
  walls: { N: true, E: true, S: true, W: true },
  status: "UNVISITED",
  isCurrent: false,
});

export const getRelativeDirection = (origin: Node, target: Node): Direction => {
  const direction = Object.keys(origin.connections).find((dir) => {
    if (origin.connections[dir]) {
      return origin.connections[dir].id === target.id;
    }

    return false;
  });

  if (!direction) {
    throw new Error(`No connection between ${origin.id} and ${target.id}`);
  }

  return direction;
};

export const getVisibleConnections = (
  node: Node
): { N?: Node, E?: Node, S?: Node, W?: Node } => {
  const connections = {};
  Object.keys(node.walls)
    .filter((key) => !node.walls[key])
    .forEach((key) => {
      connections[key] = node.connections[key];
    });

  return connections;
};

/* eslint-disable no-param-reassign */
export const removeWallBetween = (a: Node, b: Node) => {
  let dir = getRelativeDirection(a, b);
  a.walls[dir] = false;
  dir = getRelativeDirection(b, a);
  b.walls[dir] = false;
};
