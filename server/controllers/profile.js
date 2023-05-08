const BaseRoute = require("./baseRoute");
const updateUser = require("../controllers/updateUser");
const ImageUploader = require("../middlewares/uploadProfilePicture");
// create a class for the user registration and extend the base route class to inherit the router
class UserProfile extends BaseRoute {
  constructor() {
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  // create a method to initialize the routes
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and create a get route to retrieve the user profile data from the database that is stored in the session
    super.getRouter().get("/details", async (request, response) => {
      // invoke the getsessionData method
      response.send(this.getsessionData(request));
    });
    // access the getRouter method from the baseRoute class and create a put  route to update the user profile
    super.getRouter().put("/details", async (request, response) => {
      console.log(request.body);

      const { _id, profilePicture, ...rest } = request.body;
      // invoke the updateUser class and pass in the user id and the rest of the data to be updated
      const update = new updateUser(_id, rest);
      // invoke the updateUser method
      await update.updateUser();
      const imageUploader = new ImageUploader();
      await imageUploader.saveImageFromData(profilePicture, "test.png");
      // invoke the updateSessionData method and pass in the request and the rest of the data to be updated
      this.updateSessionData(request, rest);
      response.send(this.getsessionData(request));
    });
    // access the getRouter method from the baseRoute class and create a get route to retrieve the pictures data from the database that is stored in the session
    super.getRouter().get("/pictures", async (request, response) => {
      response.send({ ...this.getsessionData(request) });
    });
    // access the getRouter method from the baseRoute class and create a put route to update the pictures
    super.getRouter().put("/pictures", async (request, response) => {});
    // access the getRouter method from the baseRoute class and create a get route to retrieve the booking data from the database that is stored in the session
    super.getRouter().get("/booking", async (request, response) => {});
    // access the getRouter method from the baseRoute class and create a put route to update the booking
    super.getRouter().put("/booking", async (request, response) => {});
  }

  // create a method to get the session data
  getsessionData(request) {
    try {
      // if the session isAuthenticated is not set, send a response to the client
      if (!request.session.isAuthenticated) {
        return { isAuthenticated: false };
      } else {
        // if the session user is set, destructure the password from the session user and send a response to the client
        const { password, ...userWithoutPassword } = request.session.user;
        return userWithoutPassword;
      }
    } catch (error) {
      console.log(error);
    }
  }
  // create a method to update the session data
  updateSessionData(request, overwrittenData) {
    try {
      this.getsessionData(request);
      const newSessionData = {
        ...this.getsessionData(request),
        ...overwrittenData,
      };

      return (request.session.user = newSessionData);
    } catch (error) {
      console.log(error);
    }
  }
}
// export the user registration class and instantiate it immediately
module.exports = new UserProfile();
