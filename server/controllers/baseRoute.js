const express = require("express");
// create a base route class
class BaseRoute {
  constructor() {
    this.router = express.Router();
  }
  // create a method to return the router
  getRouter() {
    return this.router;
  }
}

module.exports = BaseRoute;
