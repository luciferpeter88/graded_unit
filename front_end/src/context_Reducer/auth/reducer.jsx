function reducer(state, action) {
  if (action.type === "LOGIN") {
    // destructuring the payload object to get the isAuthenticated and role
    const { isAuthenticated, role } = action.payload;
    // if the role is undefined, set the role to an empty string
    const title = role !== undefined ? role : "";
    // if the isAuthenticated is true, set the loggedIn to Yes else No
    const loggedIn = isAuthenticated ? "Yes" : "No";
    // return the isAuthenticated and role
    return {
      ...state,
      isAuthenticated: isAuthenticated,
      loggedIn: loggedIn,
      role: title,
    };
  }
  return state;
}

export default reducer;
