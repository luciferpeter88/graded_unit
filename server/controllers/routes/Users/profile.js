const BaseRoute = require("../shared/baseRoute");
const updateUser = require("../../classes/users/update/profile/updateUser");
const ImageUploader = require("../../classes/users/update/profile/uploadProfilePicture");
const Session = require("../../classes/users/update/profile/session");
const UploadedPictures = require("../../classes/users/update/pictures/uploadPicture");
const { connection } = require("mongoose");

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
      // instantiate the session class
      const sessionClass = new Session();
      // get the session data
      sessionClass.getsessionData(request);
      // send back the session data to the user
      response.send(sessionClass.getsessionData(request));
    });
    // access the getRouter method from the baseRoute class and create a put  route to update the user profile
    super.getRouter().put("/details", async (request, response) => {
      // console.log(request.body);

      const { _id, profilePicture, ...rest } = request.body;
      // upload image
      const imageUploader = new ImageUploader(profilePicture, _id);
      // get the image path
      const imagePath = await imageUploader.saveImageFromData();
      // invoke the updateUser class and pass in the user id and the rest of the data to be updated
      const update = new updateUser(_id, {
        ...rest,
        profilePicture: imagePath,
      });
      // invoke the updateUser method to save the changes in the database
      await update.updateUser();
      // instantiate the session class
      const sessionClass = new Session();
      // invoke the updateSessionData method and pass in the request and the rest of the data to be updated
      sessionClass.updateSessionData(request, {
        ...rest,
        profilePicture: imagePath,
      });
      // send back the updated data to the user
      response.send(sessionClass.getsessionData(request));
    });
    // access the getRouter method from the baseRoute class and create a get route to retrieve the pictures data from the database that is stored in the session
    super.getRouter().get("/pictures", async (request, response) => {
      // get all the pictures from the database
      const getAllPictures = await connection.db
        .collection("pictures")
        .find()
        .toArray();

      // instantiate the session class
      const sessionClass = new Session();
      // invoke the updateSessionData method and pass in the request and the pictures data to be updated
      sessionClass.updateSessionData(request, { allPictures: getAllPictures });
      // send back the updated data to the user
      response.send(sessionClass.getsessionData(request));
      // response.send({ ...sessionClass.getsessionData(request) });
    });
    // access the getRouter method from the baseRoute class and create a put route to update the pictures
    super.getRouter().post("/pictures", async (request, response) => {
      // instantiate the session class and get the user id
      const sessionClass = new Session();
      // get the user id
      const id = sessionClass.getsessionData(request)._id;
      // get the full name of the user
      const name =
        sessionClass.getsessionData(request).firstName +
        " " +
        sessionClass.getsessionData(request).lastName;
      // instantiate the UploadedPictures class and pass in the user id and the request body
      // the request body contains the image data
      // the user id is used to create a folder for the user in the uploads folder and store it in the database to determine who the image belongs to
      const imageUpload = new UploadedPictures(id, request.body, name);
      // wait for the image to be uploaded and saved before sending a response
      const res = await imageUpload.saveImage();
      response.send({ res });
    });
    // access the getRouter method from the baseRoute class and create a get route to retrieve the booking data from the database that is stored in the session
    super.getRouter().get("/booking", async (request, response) => {});
    // access the getRouter method from the baseRoute class and create a put route to update the booking
    super.getRouter().put("/booking", async (request, response) => {});
  }
}
// export the user registration class and instantiate it immediately
module.exports = new UserProfile();
