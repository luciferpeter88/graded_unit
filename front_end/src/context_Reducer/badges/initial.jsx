import badges from "./listOfBadges";

const initialState = {
  singleBadgePicture: "",
  name: "",
  aim: "",
  description: "",
  badgeList: badges,
  currentPage: 1,
  itemsPerPage: 15,
  getIndexOfLastItem: function () {
    return this.currentPage * this.itemsPerPage;
  },
  getIndexOfFirstItem: function () {
    return this.getIndexOfLastItem() - this.itemsPerPage;
  },
};

export default initialState;
