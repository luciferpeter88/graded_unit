const BaseRoute = require("./baseRoute");
const Authentification = require("./auth");
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
      const { email, password } = request.body;
      try {
        // create an instance of the authentification class and pass the email and password as arguments
        const verify = await new Authentification(password, email);
        // invoke the getUser method from the authentification class
        const getUser = await verify.getUser();
        // invoke the verifyPassword method from the authentification class
        const hasPasswordVerified = await verify.verifyPassword();
        // if the password is verified, set the session user to the getUser and send a response to the client
        if (hasPasswordVerified) {
          // set the session user to the getUser, to access the user details in the session from another route
          request.session.user = getUser;
          response.send({ isAuthenticated: true });
        } else {
          // if the password is not verified, the authentication failed
          response.send({ isAuthenticated: false });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

module.exports = new UserLogin();
