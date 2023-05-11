const User = require("../../../../../models/user");

class UpdateUser {
  constructor(_id, updateFields) {
    this._id = _id;
    this.updateFields = updateFields;
  }

  async updateUser() {
    try {
      const updateData = { ...this.updateFields };
      await User.findByIdAndUpdate(this._id, updateData);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
}

module.exports = UpdateUser;
