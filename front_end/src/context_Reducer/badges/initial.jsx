import badges from "./listOfBadges";

const initialState = {
  singleBadgePicture: "",
  name: "",
  aim: "",
  description: "",
  badgeList: badges,
  filteredBadgeList: badges,
  currentPage: 1,
  itemsPerPage: 15,
  numberOfPages: 11,
  getIndexOfLastItem: function () {
    return this.currentPage * this.itemsPerPage;
  },
  getIndexOfFirstItem: function () {
    return this.getIndexOfLastItem() - this.itemsPerPage;
  },
};

export default initialState;
