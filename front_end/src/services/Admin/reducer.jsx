function reducer(state, action) {
  // get the data from the server and set it to the state
  if (action.type === "GET_USERS") {
    return {
      ...state,
      users: {
        ...state.users,
        hasData: true,
        dataFromServer: action.payload,
      },
    };
  }
  // get the data from the server and set it to the state
  if (action.type === "GET_PICTURES") {
    return {
      ...state,
      pictures: {
        ...state.pictures,
        hasData: true,
        dataFromServer: action.payload,
      },
    };
  }
  if (action.type === "UPDATE_USER_STATUS") {
    return {
      ...state,
      users: {
        ...state.users,
        data: [...state.users.data, action.payload],
      },
    };
  }
  // update the user status on the server
  if (action.type === "UPDATE_USER_STATUS_SERVER") {
    return {
      ...state,
      users: {
        ...state.users,
        // update the dataFromServer with the data from the server
        dataFromServer: action.payload,
        // delete the data from the data array
        data: [],
      },
    };
  }
  if (action.type === "UPDATE_PICTURE_STATUS") {
    return {
      ...state,
      pictures: {
        ...state.pictures,
        data: [...state.pictures.data, action.payload],
      },
    };
  }
  if (action.type === "UPDATE_PICTURE_STATUS_SERVER") {
    return {
      ...state,
      pictures: {
        ...state.pictures,
        dataFromServer: action.payload,
        data: [],
      },
    };
  }
  if (action.type === "UPDATE_USER_PROFILE") {
    return {
      ...state,
      users: {
        ...state.users,
        dataFromServer: action.payload,
      },
    };
  }
  if (action.type === "DELETE_USER_PROFILE") {
    console.log(action.payload, "updated, delete user profile");
    return {
      ...state,
      users: {
        ...state.users,
        dataFromServer: action.payload,
      },
    };
  }
  // UPDATE_BOOKING_ADD
  // booking reducer from here
  if (action.type === "GET_BOOKING") {
    return {
      ...state,
      booking: {
        ...state.booking,
        hasData: true,
        dataFromServer: action.payload,
      },
    };
  }
  if (action.type === "UPDATE_BOOKING_ADD") {
    // convert the date to a format that the calendar can understand
    console.log(action.payload, "UPDATE_BOOKING_ADD");
    // console.log(state.booking.data, "updatetdStates");
    return {
      ...state,
      booking: {
        ...state.booking,
        fetch: !state.booking.fetch,
        // list the bookings that the user made on the CLIENT SIDE!
        dataFromServer: [
          // ...state.booking.dataFromServer,
          ...action.payload,
        ],
      },
    };
  }
  if (action.type === "UPDATE_BOOKING_DELETE") {
    return {
      ...state,
      booking: {
        ...state.booking,
        dataFromServer: action.payload,
      },
    };
  }
  if (action.type === "UPDATE_BOOKING_EDIT") {
    return {
      ...state,
      fetch: !state.booking.fetch,
      booking: {
        ...state.booking,
        dataFromServer: action.payload,
      },
    };
  }
  // clear the data from the state when the modal is closed
  if (action.type === "RESET") {
    return {
      ...state,
      users: {
        ...state.users,
        data: [],
      },
      pictures: {
        ...state.pictures,
        data: [],
      },
    };
  }
  return state;
}

export default reducer;
