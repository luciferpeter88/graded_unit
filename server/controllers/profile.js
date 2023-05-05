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
      // invoke the getsessionData method
      this.getsessionData(request, response);
    });
  }
  // create a method to get the session data
  getsessionData(request, response) {
    try {
      // if the session user is not set, send a response to the client
      if (!request.session.user) {
        response.send({ isAuthenticated: false });
      } else {
        // if the session user is set, destructure the password from the session user and send a response to the client
        const { password, ...userWithoutPassword } = request.session.user;
        response.send(userWithoutPassword);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// export the user registration class and instantiate it immediately
module.exports = new UserProfile();
