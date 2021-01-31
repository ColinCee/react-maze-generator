// @flow
import React from "react";
import type { Context, Node } from "react";

export type State = { numRows: number };
const initialState: State = { numRows: 4 };
const MazeContext: Context<State> = React.createContext(initialState);

type Props = {
  children: Node,
};
const MazeProvider = ({ children }: Props): Node => (
  <MazeContext.Provider value={initialState}>{children}</MazeContext.Provider>
);
export { MazeContext, MazeProvider };
