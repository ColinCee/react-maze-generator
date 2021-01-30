// @flow
import React from "react";
import type { Node } from "react";
import "./App.css";
import Grid from "./components/grid";

const App = (): Node => (
  <div className="container">
    <h1>Maze Generator</h1>
    <Grid />
  </div>
);

export default App;
