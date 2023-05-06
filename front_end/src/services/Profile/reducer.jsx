function reducer(state, action) {
  // update the data state with the incoming data from the server and display it on the UI
  if (action.type === "GET_PROFILE") {
    return {
      ...state,
      profileDetails: {
        hasData: true,
        data: action.payload,
      },
    };
  }
  if (action.type === "GET_PICTURES") {
    return {
      ...state,
      profilePictures: {
        hasData: true,
        data: action.payload,
      },
    };
  }

  return state;
}

export default reducer;
