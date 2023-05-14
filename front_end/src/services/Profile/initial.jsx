// this is the initial state of the profile reducer, the profile reducer is going to handle the incoming data from the server
const initialState = {
  profileDetails: {
    // hasData is set to false because the data has not been fetched from the server
    hasData: false,
    // dataFromServer is an array that holds the data from the server which is unchangeble
    dataFromServer: [],
    // this one is going to hold the data from the server and it is going to be changed by the user
    data: [],
  },
  profilePictures: {
    hasData: false,
    data: [],
    formData: [],
    dataFromServer: [],
  },
  profileBooking: {
    hasData: false,
    data: [],
  },
  profileEvetns: {
    hasData: false,
    data: [],
  },
};

export default initialState;
