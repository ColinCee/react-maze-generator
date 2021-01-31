import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../input/Slider";
import { MazeContext } from "../../store/MazeContext";

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
        label="Size"
        onChange={(e, value) => {
          dispatch({ type: "SET_NUM_ROWS", payload: value });
        }}
      />
    </div>
  );
};

export default GridControl;
