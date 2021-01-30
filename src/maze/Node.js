// @flow

type Direction = "N" | "E" | "S" | "W";
export default class Node {
  id: number;

  connections: { N?: Node, E?: Node, S?: Node, W?: Node } = {};

  constructor(id: number) {
    this.id = id;
  }

  addConnection(direction: Direction, connection: Node) {
    this.connections[direction] = connection;
  }

  addConnections(connections: { N?: Node, E?: Node, S?: Node, W?: Node }) {
    this.connections = {
      ...this.connections,
      ...connections,
    };
  }
}
