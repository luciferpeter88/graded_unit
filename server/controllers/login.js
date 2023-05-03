const BaseRoute = require("./baseRoute");
// create a class for the user login and extend the base route class to inherit the router
class UserLogin extends BaseRoute {
  constructor() {
    // invoke the baseRoute constructor to access the class properties and methods
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  // create a method to initialize the routes
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and create a post route
    super.getRouter().post("/", async (request, response) => {
      try {
        response.send("Logged In");
      } catch (error) {
        console.log(error);
      }
    });
  }
}

module.exports = new UserLogin();
