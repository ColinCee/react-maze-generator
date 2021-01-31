import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { MazeContext } from "../../../store/MazeContext";
import DfsSolver from "../../../maze/solver/DfsSolver";

const useStyles = makeStyles({
  root: { marginBottom: "2em" },
});
const SolverButton = () => {
  const { state, dispatch } = useContext(MazeContext);
  const { root } = useStyles();
  return (
    <div className={root}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const { graph } = state;

          DfsSolver(
            graph,
            dispatch,
            graph[0][0],
            graph[graph.length - 1][graph.length - 1]
          );
        }}
      >
        Solve
      </Button>
    </div>
  );
};

export default SolverButton;
