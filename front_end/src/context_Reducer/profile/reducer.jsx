function reducer(state, action) {
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "OPEN_MODAL") {
    return { ...state, showModal: true, id: action.payload };
  }
  return state;
}
export default reducer;
