function reducer(state, action) {
  if (action.type === "TOGGLE") {
    return {
      ...state,
      toggle: !state.toggle,
    };
  }
  if (action.type === "HAMBURGER-DASH") {
    return {
      ...state,
      toggleDash: !state.toggleDash,
    };
  }
  return state;
}
export default reducer;
