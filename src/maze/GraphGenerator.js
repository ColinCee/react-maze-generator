// @flow
import Node from "./Node";

export default class GraphGenerator {
  nodes: Node[][] = [];

  generate(numRows: number, numCols: number): Node[][] {
    let counter = 0;
    for (let i = 1; i <= numRows; i += 1) {
      const row = [];
      for (let j = 1; j <= numCols; j += 1) {
        row.push(new Node((counter += 1)));
      }

      this.nodes.push(row);
    }

    for (let i = 0; i < numRows; i += 1) {
      for (let j = 0; j < numCols; j += 1) {
        const node = this.nodes[i][j];
        const edgeAdjacentNodes = this.getEdgeAdjacentNodes(i, j);
        node.addConnections(edgeAdjacentNodes);
      }
    }

    return this.nodes;
  }

  getEdgeAdjacentNodes(
    rowNum: number,
    colNum: number
  ): { N?: Node, E?: Node, S?: Node, W?: Node } {
    const edgeAdjacentNodes = {};

    // N
    if (rowNum > 0) {
      edgeAdjacentNodes.N = this.nodes[rowNum - 1][colNum];
    }

    // S
    if (rowNum < this.nodes.length - 1) {
      edgeAdjacentNodes.S = this.nodes[rowNum + 1][colNum];
    }

    // W
    if (colNum > 0) {
      edgeAdjacentNodes.W = this.nodes[rowNum][colNum - 1];
    }

    // E
    if (colNum < this.nodes[colNum].length - 1) {
      edgeAdjacentNodes.E = this.nodes[rowNum][colNum + 1];
    }

    return edgeAdjacentNodes;
  }
}
