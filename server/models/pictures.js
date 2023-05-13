const mongoose = require("mongoose");

// Define the schema for the users collection
const pictureSchema = new mongoose.Schema({
  userId: String,
  imagePath: String,
  uploadedBy: String,
  status: String,
});

// Create a model for the users collection
const Picture = mongoose.model("pictures", pictureSchema);

module.exports = Picture;
