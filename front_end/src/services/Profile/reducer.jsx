import DateConverter from "./converDate";
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
  // update the states based on the user , without making a request to the server
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
  // making a request to the server to update the profile details so the user can edit his profile
  if (action.type === "UPDATE_PROFILE_EDIT_SERVER") {
    return {
      ...state,
      profileDetails: {
        ...state.profileDetails,
        // overwrite the dataFromServer with the data that came from the server, so the user can see the changes that he made
        dataFromServer: action.payload,
        data: {
          ...state.profileDetails.data,
        },
      },
    };
  }
  // Pictures reducer from here
  if (action.type === "UPDATE_PROFILE_PICTURES") {
    return {
      ...state,
      profilePictures: {
        ...state.profilePictures,
        // list the pictures that the user uploaded on the CLIENT SIDE!
        data: [...state.profilePictures.data, ...action.payload],
      },
    };
  }
  if (action.type === "FORM_DATA") {
    return {
      ...state,
      profilePictures: {
        ...state.profilePictures,
        // converted pictures to base64 on THE CLIENT SIDE!
        formData: action.payload,
      },
    };
  }
  if (action.type === "UPDATE_PROFILE_PICTURES_SERVER") {
    // after the user sent the pictures to the server, we need to clear the data from the state to not display the same pictures again and not send false data to the server
    return {
      ...state,
      profilePictures: {
        ...state.profilePictures,
        data: [],
        formData: [],
      },
    };
  }
  //  get the pictures from the server and display them on the UI
  if (action.type === "GET_PICTURES") {
    return {
      ...state,
      profilePictures: {
        ...state.profilePictures,
        // hasData is set to true because the data has been fetched from the server
        hasData: true,
        // the data that came from the server
        dataFromServer: action.payload,
      },
    };
  }
  // booking reducer from here
  if (action.type === "UPDATE_PROFILE_BOOKING_ADD") {
    // convert the date to a format that the calendar can understand
    const convertedFormat = action.payload.map((booking) => {
      const convertDate = new DateConverter();
      return convertDate.convert(booking);
    });
    return {
      ...state,
      profileBooking: {
        ...state.profileBooking,
        // list the bookings that the user made on the CLIENT SIDE!
        data: [
          ...state.profileBooking.data,
          ...state.profileBooking.dataFromServer,
          ...convertedFormat,
        ],
      },
    };
  }
  if (action.type === "UPDATE_PROFILE_BOOKING_DELETE") {
    // filter the data that came from the server and remove the item that the user deleted
    let filteredItems;
    if (state.profileBooking.hasData) {
      filteredItems = state.profileBooking.dataFromServer.filter(
        (booking) => booking.Id !== action.payload
      );
    }
    return {
      ...state,
      profileBooking: {
        ...state.profileBooking,
        // list the bookings that the user made on the CLIENT SIDE!
        data: [...filteredItems],
      },
    };
  }
  if (action.type === "UPDATE_PROFILE_BOOKING_EDIT") {
    let newItems;
    // if the user has data in the state, then we need to filter the data that came from the server and remove the item that the user edited
    if (state.profileBooking.hasData) {
      newItems = state.profileBooking.dataFromServer.filter(
        (booking) => booking.Id !== action.payload[0].Id
      );
    }
    // add the new item to the state
    const editedItem = action.payload.map((booking) => {
      const convertDate = new DateConverter();
      return convertDate.convert(booking);
    });

    return {
      ...state,
      profileBooking: {
        ...state.profileBooking,
        // list the bookings that the user made on the CLIENT SIDE!
        data: [...newItems, ...editedItem],
      },
    };
  }
  if (action.type === "UPDATE_PROFILE_APPOINTMENT_SERVER") {
    // writing the data to the server
    return {
      ...state,
      profileBooking: {
        ...state.profileBooking,
        // clear the data from the state after the user sent the data to the server
        data: [],
      },
    };
  }
  if (action.type === "GET_APPOINTMENT") {
    // get the data from the server and display it on the UI
    const covertedFormat = action.payload.avaibility.map((booking) => {
      console.log(booking.StartTime, "booking.StartTime");
      const StartTime = new Date(booking.StartTime);
      const EndTime = new Date(booking.EndTime);
      return {
        ...booking,
        StartTime: StartTime,
        EndTime: EndTime,
      };
    });
    return {
      ...state,
      profileBooking: {
        ...state.profileBooking,
        // hasData is set to true because the data has been fetched from the server
        hasData: true,
        // the data that came from the server
        dataFromServer: [...covertedFormat],
      },
    };
  }
  // delete the data from the state when the modal is closed
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      profilePictures: {
        ...state.profilePictures,
        data: [],
      },
    };
  }
  return state;
}

export default reducer;
