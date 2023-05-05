const BaseRoute = require("./baseRoute");
// create a class for the user registration and extend the base route class to inherit the router
class UserProfile extends BaseRoute {
  constructor() {
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  // create a method to initialize the routes
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and create a get route
    super.getRouter().get("/", async (request, response) => {
      try {
        if (!request.session.user) {
          response.send({ isAuthenticated: false });
        } else {
          response.send(request.session.user);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
// export the user registration class and instantiate it immediately
module.exports = new UserProfile();
