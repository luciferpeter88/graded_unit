function reducer(state, action) {
  if (action.type === "GET_USERS") {
    return {
      ...state,
      users: {
        hasData: true,
        dataFromServer: action.payload,
      },
    };
  }
  if (action.type === "GET_PICTURES") {
    return {
      ...state,
      pictures: {
        hasData: true,
        dataFromServer: action.payload,
      },
    };
  }
  return state;
}

export default reducer;
