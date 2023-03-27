import React, { useReducer } from "react";
import navInitial from "../context_Reducer/nav/initial";
import navReducer from "../context_Reducer/nav/reducer";
import navContext from "../context_Reducer/nav/navContext";

function AppContext({ children }) {
  const [state, dispatch] = useReducer(navReducer, navInitial);
  return (
    <navContext.Provider value={{ state, dispatch }}>
      {children}
    </navContext.Provider>
  );
}

export default AppContext;
