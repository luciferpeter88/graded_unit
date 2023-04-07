function reducer(state, action) {
  if (action.type === "SET_GAME_URL") {
    const singleGameUrl = state.gameList.find(
      (game) => game.name === action.payload
    );
    return { ...state, gameUrl: singleGameUrl.gamUrl };
  }
  return state;
}
export default reducer;
