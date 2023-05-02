const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
//creating a class for global middlewares
class GlobalMiddlewares {
  constructor() {
    this.app = express();
    this.setupMiddleware();
  }
  //creating a function for global middlewares
  setupMiddleware() {
    //applying these middlewares for the entire application
    this.app.use([
      bodyParser.urlencoded({ extended: false }),
      bodyParser.json(),
    ]);
    this.app.use(cookieParser());
    this.app.use(
      cors({
        origin: true,
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

module.exports = new GlobalMiddlewares();
