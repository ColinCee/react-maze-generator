import React, { useContext, useEffect } from "react";
import GraphGenerator from "../../../maze/generator/GraphGenerator";
import { MazeContext } from "../../../store/MazeContext";
import GridSize from "./GridSize";
import SolverButton from "./SolverButton";

const GridControl = () => {
  const { state, dispatch } = useContext(MazeContext);

  useEffect(() => {
    const graphGenerator = new GraphGenerator();
    const graph = graphGenerator.generate(state.numRows, state.numRows);

    dispatch({ type: "SET_GRAPH", payload: graph });
  }, []);

  return (
    <>
      <GridSize />
      <SolverButton />
    </>
  );
};

export default GridControl;
