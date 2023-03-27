function reducer(state, action) {
  if (action.type === "TOGGLE") {
    return {
      ...state,
      toggle: !state.toggle,
    };
  }
  return state;
}
export default reducer;
