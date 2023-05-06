import axios from "axios";
// create a function that takes in the request type, url, dispatch, and dispatchType as arguments and makes a request to the server
async function makingRequest(reqType, url, dispatch, dispatchType, data) {
  try {
    let response;
    // if the request type is get, make a get request to the server, else make a post request to the server with the data
    if (reqType === "get") {
      response = await axios[reqType](url, {
        withCredentials: true,
      });
    } else {
      response = await axios[reqType](url, data, {
        withCredentials: true,
      });
    }
    // dispatch the response to the reducer to update the initial state
    dispatch({ type: dispatchType, payload: response.data });
    console.log(response.data, dispatchType);
  } catch (error) {
    console.error(error);
  }
}

export default makingRequest;
