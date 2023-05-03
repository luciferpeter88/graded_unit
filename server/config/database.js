const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    // Connect to the database
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }
}

module.exports = new Database();
