import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "../../input/Slider";
import { MazeContext } from "../../../store/MazeContext";
import GraphGenerator from "../../../maze/generator/GraphGenerator";

const useStyles = makeStyles({
  root: { marginTop: "5em", marginBottom: "2em" },
});

const GridControl = () => {
  const { state, dispatch } = useContext(MazeContext);

  const { root } = useStyles();
  return (
    <div className={root}>
      <Slider
        value={state.numRows}
        min={1}
        label="Size"
        onChange={(e, value) => {
          const graphGenerator = new GraphGenerator();
          const graph = graphGenerator.generate(value, value);

          dispatch({ type: "SET_GRAPH", payload: graph });
          dispatch({ type: "SET_NUM_ROWS", payload: value });
        }}
      />
      <Typography variant="button">
        Total Cells: {state.numRows ** 2}
      </Typography>
    </div>
  );
};

export default GridControl;
