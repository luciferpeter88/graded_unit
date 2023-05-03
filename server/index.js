// Import the express package
const express = require("express")();
// Import the global middlewares
const GlobalMiddlewares = require("./middlewares/global");
// Import the dotenv package
require("dotenv").config();
// Import the database connection
require("./config/database");
// Import the routes
const registration = require("./controllers/register");
const login = require("./controllers/login");
// inmitiate the global middlewares
new GlobalMiddlewares(express);

// create a route for the login page
express.use("/login", login.getRouter());

// create a route for the registration page
express.use("/registration", registration.getRouter());

const PORT = process.env.PORT || 4000;
express.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
