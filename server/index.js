const express = require("express");
const app = express();
require("./middlewares/global");
require("dotenv").config();
// Import the database connection
require("./config/database");
const registration = require("./controllers/register");
const login = require("./controllers/login");
// applying these middlewares for the entire application

// create a route for the registration page
app.use("/registration", registration);
// create a route for the login page
app.use("/login", login);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
