// this is the initial state of the profile reducer, the profile reducer is going to handle the incoming data from the server
const initialState = {
  profileDetails: {
    hasData: false,
    data: [],
  },
  profilePictures: {
    hasData: false,
    data: [],
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
