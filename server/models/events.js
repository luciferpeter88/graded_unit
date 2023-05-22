const mongoose = require("mongoose");

// Define the schema for the users collection
const eventSchema = new mongoose.Schema({
  Subject: String,
  Id: Number,
  StartTime: String,
  EndTime: String,
  IsAllDay: Boolean,
  Location: String,
  Description: String,
});

// Create a model for the users collection
const Event = mongoose.model("events", eventSchema);

module.exports = Event;
