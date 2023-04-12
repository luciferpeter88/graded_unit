function reducer(state, action) {
  const numberOfPages = Math.ceil(
    state.filteredBadgeList.length / state.itemsPerPage
  );
  if (action.type === "BADGE_NEXT") {
    const badgesNum = Math.floor(
      state.filteredBadgeList.length / state.itemsPerPage
    );

    if (state.getIndexOfFirstItem() === badgesNum * state.itemsPerPage) {
      return {
        ...state,
        currentPage: 1,
        numberOfPages: numberOfPages,
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
        currentPage: numberOfPages,
        numberOfPages: numberOfPages,
      };
    }
    if (state.currentPage > 1) {
      return {
        ...state,
        currentPage: state.currentPage - 1,
        numberOfPages: numberOfPages,
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
  if (action.type === "BADGE_SEARCH") {
    const searchValue = action.payload.toLowerCase();

    if (searchValue === "") {
      return {
        ...state,
        loading: false,
        filteredBadgeList: state.badgeList,
        numberOfPages: 11,
      };
    }
    const filteredBadges = state.badgeList.filter((badge) => {
      return badge.title.toLowerCase().includes(searchValue);
    });
    if (numberOfPages === 0) {
      return {
        ...state,
        filteredBadgeList: filteredBadges,
        numberOfPages: 1,
        currentPage: 1,
      };
    }
    return {
      ...state,
      loading: true,
      filteredBadgeList: filteredBadges,
      numberOfPages: numberOfPages,
      currentPage: 1,
    };
  }
  if (action.type === "BADGE_TEXT") {
    const singleBadge = state.badgeList.find(
      (singleBadge) => singleBadge.title === action.payload
    );
    return {
      ...state,
      filteredBadgeList: [singleBadge],
      loading: false,
      numberOfPages: 1,
      currentPage: 1,
    };
  }
  return state;
}
export default reducer;
