// @flow
export default class Node {
  id: number;

  connections: Node[] = [];

  constructor(id: number) {
    this.id = id;
  }

  addConnection(connection: Node) {
    this.connections.push(connection);
  }

  addConnections(connections: Node[]) {
    connections.forEach((element) => {
      this.addConnection(element);
    });
  }
}
