// @flow
import React from "react";
import type { Node } from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import { Grid, GridControl } from "./components/grid";
import { MazeProvider } from "./store/MazeContext";

const App = (): Node => (
  <MazeProvider>
    <div className="container">
      <Typography variant="h2">Maze Generator</Typography>
      <GridControl />
      <Grid />
    </div>
  </MazeProvider>
);

export default App;
