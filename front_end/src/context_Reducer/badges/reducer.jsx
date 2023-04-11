function reducer(state, action) {
  if (action.type === "BADGE_NEXT") {
    if (state.getIndexOfFirstItem() === 150) {
      return {
        ...state,
        currentPage: 1,
      };
    }
    return {
      ...state,
      currentPage: state.currentPage + 1,
    };
  }
  if (action.type === "BADGE_PREV") {
    if (state.currentPage === 1) {
      return {
        ...state,
        currentPage: 11,
      };
    }
    if (state.currentPage > 1) {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
  }
  if (action.type === "BADGE_NAME") {
    const singleBadge = state.badgeList.find(
      (singleBadge) => singleBadge.title === action.payload
    );
    return {
      ...state,
      singleBadgePicture: singleBadge.picture,
      name: singleBadge.title,
      aim: singleBadge.shortDescription,
      description: singleBadge.longDescription,
    };
  }
  return state;
}
export default reducer;
