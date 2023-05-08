function reducer(state, action) {
  // update the data state with the incoming data from the server and display it on the UI
  if (action.type === "GET_PROFILE") {
    return {
      ...state,
      profileDetails: {
        ...state.profileDetails,
        // hasData is set to true because the data has been fetched from the server
        hasData: true,
        // dataFromServer is an array that holds the data from the server which is unchangeble
        dataFromServer: action.payload,
        // this one is going to hold the data from the server and it is going to be changed by the user
        data: state.profileDetails.dataFromServer,
      },
    };
  }
  // update the states based on the user input
  if (action.type === "UPDATE_PROFILE") {
    return {
      ...state,
      profileDetails: {
        ...state.profileDetails,
        data: {
          // copy the data from the state and update the value of the input that the user changed, so those inputs fields that the user did not change will have the same value as the one from the server
          ...state.profileDetails.data,
          // update the value of the input that the user changed
          [action.payload.name]: action.payload.value,
        },
      },
    };
  }

  if (action.type === "UPDATE_PROFILE_EDIT_SERVER") {
    console.log(action.payload, "payload");

    return {
      ...state,
      profileDetails: {
        ...state.profileDetails,
        dataFromServer: action.payload,
        data: {
          ...state.profileDetails.data,
        },
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
