const BaseRoute = require("../shared/baseRoute");
const updateUser = require("../../classes/users/update/profile/updateUser");
const ImageUploader = require("../../classes/users/update/profile/uploadProfilePicture");
const Session = require("../../classes/users/update/profile/session");
const UploadedPictures = require("../../classes/users/update/pictures/uploadPicture");
const { connection } = require("mongoose");
const getDb = require("../admin/getDataDb");
const User = require("../../../models/user");

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
    super.getRouter().get("/booking", async (request, response) => {
      // instantiate the session class
      const sessionClass = new Session();
      // send back the updated data to the user
      const getUsers = new getDb("users");
      response.send(sessionClass.getsessionData(request));
      console.log(sessionClass.getsessionData(request), "session");
    });
    // access the getRouter method from the baseRoute class and create a put route to update the booking
    super.getRouter().post("/booking/create", async (request, response) => {
      const sessionClass = new Session();
      // get the user id
      const id = sessionClass.getsessionData(request)._id;
      const user = await User.findById(id);

      // pass in the user id and the request body to save the booking in the database
      const events = [...user.avaibility, ...request.body];
      // delete the entire events array
      await User.findByIdAndUpdate(id, { $set: { avaibility: [] } });
      // save the new events array
      const newEvents = events.map((appointment) => {
        return {
          Subject: appointment.Subject,
          Id: appointment.Id,
          StartTime: appointment.StartTime,
          EndTime: appointment.EndTime,
          IsAllDay: appointment.IsAllDay,
          Location: appointment.Location || "",
          Description: appointment.Description || "",
        };
      });
      // save the new events array
      const update = {
        $push: {
          avaibility: {
            $each: newEvents,
          },
        },
      };
      // update the user data
      const updateEvent = await User.findByIdAndUpdate(id, update, {
        new: true,
      });
      // update the session data
      request.session.user.avaibility = updateEvent.avaibility;
      // send back the updated data to the user
      response.send(sessionClass.getsessionData(request).avaibility);
    });
    super.getRouter().post("/booking/delete", async (request, response) => {
      const sessionClass = new Session();
      const id = sessionClass.getsessionData(request)._id;
      // delete the booking from the database
      const user = await User.findOneAndUpdate(
        { _id: id },
        { $pull: { avaibility: { Id: request.body.id } } },
        { new: true }
      );
      request.session.user.avaibility = user.avaibility;

      response.send(sessionClass.getsessionData(request).avaibility);
    });
    super.getRouter().post("/booking/update", async (request, response) => {
      const sessionClass = new Session();
      const id = sessionClass.getsessionData(request)._id;
      console.log(request.body, "edit");
      // update the booking in the database
      const user = await User.findOneAndUpdate(
        { _id: id, "avaibility.Id": request.body.Id }, // Match the user ID and the availability ID
        {
          $set: {
            "avaibility.$.StartTime": request.body.StartTime,
            "avaibility.$.EndTime": request.body.EndTime,
            "avaibility.$.Subject": request.body.Subject || "",
            "avaibility.$.Location": request.body.Location || "",
            "avaibility.$.Description": request.body.Description || "",
          },
        }, // Update the properties as needed
        { new: true }
      );
      request.session.user.avaibility = user.avaibility;
      response.send(sessionClass.getsessionData(request).avaibility);
    });
  }
}
// export the user registration class and instantiate it immediately
module.exports = new UserProfile();
