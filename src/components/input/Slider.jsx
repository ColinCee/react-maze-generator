// @flow
import React from "react";
import type { Node } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  defaultValue: number,
  label: string,
  onChange: Function,
};

const useStyles = makeStyles({
  root: { display: "flex", flexDirection: "row", width: "15em" },
  typography: { marginRight: "1em" },
});
const CustomSlider = ({ defaultValue, label, onChange }: Props): Node => {
  const { root, typography } = useStyles();
  return (
    <div className={root}>
      <Typography id="discrete-slider-custom" className={typography}>
        {label}
      </Typography>
      <Slider
        defaultValue={defaultValue}
        aria-labelledby="discrete-slider-custom"
        valueLabelDisplay="auto"
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSlider;
