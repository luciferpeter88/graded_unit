const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");

class GlobalMiddlewares {
  // create a constructor to initialize the express arguement
  constructor(expressArguement) {
    this.app = expressArguement;
    // initialize the middlewares immediately the class is instantiated
    this.setup();
  }

  setup() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH"],
        credentials: true,
      })
    );
    this.app.use(
      session({
        secret: "12345",
        name: "session",
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false,
        },
      })
    );

    this.app.use(express.static("pictures"));
  }
}

module.exports = GlobalMiddlewares;
