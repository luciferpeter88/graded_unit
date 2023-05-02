const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", async (request, response) => {
  try {
    console.log("Registering a new user");
    response.send("Registering a new user");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
