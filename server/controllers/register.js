const BaseRoute = require("./baseRoute");
const bcrypt = require("bcrypt");
// create a class for the user registration and extend the base route class to inherit the router
class UserRegistration extends BaseRoute {
  constructor() {
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  // create a method to initialize the routes
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and create a post route
    super.getRouter().post("/", async (request, response) => {
      try {
        response.send("Registering a new user");
      } catch (error) {
        console.log(error);
      }
    });
  }
}

module.exports = new UserRegistration();
