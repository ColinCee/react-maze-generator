const MazeReducer = (state, action) => {
  switch (action.type) {
    case "SET_NUM_ROWS":
      if (action.payload <= 0) {
        return state;
      }
      return { ...state, numRows: action.payload };
    case "SET_GRAPH":
      return { ...state, graph: action.payload };
    case "UPDATE_NODE":
      for (let i = 0; i < state.graph.length; i += 1) {
        for (let j = 0; j < state.graph[i].length; j += 1) {
          if (state.graph[i][j].id === action.payload.id) {
            const graph = Object.assign([...state.graph], {
              [i]: Object.assign([...state.graph[i]], {
                [j]: { ...state.graph[i][j], ...action.payload },
              }),
            });

            return { ...state, graph };
          }
        }
      }

      return state;
    default:
      return state;
  }
};

export default MazeReducer;
