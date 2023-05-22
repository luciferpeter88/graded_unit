// this is the initial state of the profile reducer, the profile reducer is going to handle the incoming data from the server
const initialState = {
  users: {
    // hasData is set to false because the data has not been fetched from the server
    hasData: false,
    // dataFromServer is an array that holds the data from the server which is unchangeble
    dataFromServer: [],
    // this is the data that will be sent to the server
    data: [],
  },
  pictures: { hasData: false, dataFromServer: [], data: [] },
  booking: {
    hasData: false,
    fetch: false,
    dataFromServer: [],
  },
};

export default initialState;
