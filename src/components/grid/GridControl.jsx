import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "../input/Slider";
import { MazeContext } from "../../store/MazeContext";

const useStyles = makeStyles({
  root: { marginTop: "5em", marginBottom: "2em" },
});

export default () => {
  const { numRows } = useContext(MazeContext);
  const { root } = useStyles();
  return (
    <div className={root}>
      <Slider defaultValue={numRows} label="Size" />
    </div>
  );
};
