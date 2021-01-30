// @flow
type Direction = "N" | "E" | "S" | "W";
export default class Node {
  id: number;

  connections: { N?: Node, E?: Node, S?: Node, W?: Node } = {};

  walls: { N: boolean, E: boolean, S: boolean, W: boolean } = {
    N: true,
    E: true,
    S: true,
    W: true,
  };

  constructor(id: number) {
    this.id = id;
  }

  addConnections(connections: { N?: Node, E?: Node, S?: Node, W?: Node }) {
    this.connections = {
      ...this.connections,
      ...connections,
    };
  }

  getDirecitonOfConnection(connection: Node): Direction {
    const direction = Object.keys(this.connections).find((dir) => {
      if (this.connections[dir]) {
        return this.connections[dir].id === connection.id;
      }

      return false;
    });
    if (!direction) {
      throw new Error(`No connection between ${this.id} and ${connection.id}`);
    }

    return direction;
  }

  removeWall(connection: Node) {
    const direction = this.getDirecitonOfConnection(connection);
    this.walls[direction] = false;
  }
}
