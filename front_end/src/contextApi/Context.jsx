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
// data for badges
import badgesInitial from "../context_Reducer/badges/initial";
import badgesReducer from "../context_Reducer/badges/reducer";
import badgesContext from "../context_Reducer/badges/badgeContext";
// end of data for badges
//data for profile
import profileInitial from "../context_Reducer/profile/initial";
import profileReducer from "../context_Reducer/profile/reducer";
import profileContext from "../context_Reducer/profile/profileContext";
// end of data for profile
// data for auth
import authInitial from "../context_Reducer/auth/initial";
import authReducer from "../context_Reducer/auth/reducer";
import authContext from "../context_Reducer/auth/authContext";
// end of data for auth
// profile data
import profileInitialServices from "../services/Profile/initial";
import profileReducerServices from "../services/Profile/reducer";
import profileContextServices from "../services/Profile/profileContext";
// end of profile data
function AppContext({ children }) {
  const [navState, navDispatch] = useReducer(navReducer, navInitial);
  const [gameState, gameDispatch] = useReducer(gamesReducer, gamesInitial);
  const [badgesState, badgesDispatch] = useReducer(
    badgesReducer,
    badgesInitial
  );
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profileInitial
  );
  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const [profileStateServices, profileDispatchServices] = useReducer(
    profileReducerServices,
    profileInitialServices
  );
  return (
    <navContext.Provider value={{ navState, navDispatch }}>
      <gamesContext.Provider value={{ gameState, gameDispatch }}>
        <badgesContext.Provider value={{ badgesState, badgesDispatch }}>
          <profileContext.Provider value={{ profileState, profileDispatch }}>
            <authContext.Provider value={{ authState, authDispatch }}>
              <profileContextServices.Provider
                value={{ profileStateServices, profileDispatchServices }}
              >
                {children}
              </profileContextServices.Provider>
            </authContext.Provider>
          </profileContext.Provider>
        </badgesContext.Provider>
      </gamesContext.Provider>
    </navContext.Provider>
  );
}

export default AppContext;
