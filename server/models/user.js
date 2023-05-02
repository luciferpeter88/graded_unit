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
  phoneNumber: Number,
  profilePicture: String,
  avaibility: [{ title: String, start: Date, end: Date, description: String }],
});

// Create a model for the users collection
const User = mongoose.model("user", userSchema);

module.exports = User;
