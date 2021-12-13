export const loadColor = () => (dispatch) => {
  const colors = ["orange", "green", "blue", "black", "red"];

  dispatch({
    type: "FETCH_COLORS",
    payload: { colors: colors },
  });
};
