const mongoose = require("mongoose");

// Define the schema for the users collection
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  status: String,
  userName: String,
  phoneNumber: String,
  profilePicture: String,
  about: String,
  avaibility: [
    {
      Subject: String,
      Id: Number,
      StartTime: String,
      EndTime: String,
      IsAllDay: Boolean,
      Location: String,
      Description: String,
    },
  ],
});

// Create a model for the users collection
const User = mongoose.model("user", userSchema);

module.exports = User;
