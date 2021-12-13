const initState = {
  colors: [],
};
export const colorReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COLORS":
      return { ...state, colors: action.payload.colors };
    default:
      return { ...state };
  }
};
