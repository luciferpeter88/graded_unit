import React, { useReducer } from "react";
// data for nav
import navInitial from "../context_Reducer/nav/initial";
import navReducer from "../context_Reducer/nav/reducer";
import navContext from "../context_Reducer/nav/navContext";
// end of data for nav
// data for games
import gamesInitial from "../context_Reducer/games/initial";
import gamesReducer from "../context_Reducer/games/reducer";
import gamesContext from "../context_Reducer/games/gameContext";
// end of data for games

function AppContext({ children }) {
  const [navState, navDispatch] = useReducer(navReducer, navInitial);
  const [gameState, gameDispatch] = useReducer(gamesReducer, gamesInitial);

  return (
    <navContext.Provider value={{ navState, navDispatch }}>
      <gamesContext.Provider value={{ gameState, gameDispatch }}>
        {children}
      </gamesContext.Provider>
    </navContext.Provider>
  );
}

export default AppContext;
