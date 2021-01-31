import React, { useReducer } from "react";
import MazeReducer from "./MazeReducer";

const initialState = { numRows: 4 };
const MazeContext = React.createContext({ initialState });

type Props = {
  children: Node,
};
const MazeProvider = ({ children }: Props): Node => {
  const [state, dispatch] = useReducer(MazeReducer, initialState);

  return (
    <MazeContext.Provider value={{ state, dispatch }}>
      {children}
    </MazeContext.Provider>
  );
};
export { MazeContext, MazeProvider };
