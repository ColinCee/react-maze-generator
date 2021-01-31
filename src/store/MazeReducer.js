const MazeReducer = (state, action) => {
  switch (action.type) {
    case "SET_NUM_ROWS":
      if (action.payload <= 0) {
        return state;
      }
      return { ...state, numRows: action.payload };
    case "SET_GRAPH":
      return { ...state, graph: action.payload };
    default:
      return state;
  }
};

export default MazeReducer;
