const BaseRoute = require("../shared/baseRoute");
const User = require("../../../models/user");
const Picture = require("../../../models/pictures");
const GetDataDb = require("./getDataDb");

class Admin extends BaseRoute {
  constructor() {
    // invoke the baseRoute class and inherit the router from the baseRoute class
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and create a get route to retrieve the users data from the database
    super.getRouter().get("/users", async (request, response) => {
      // get all the users from the database and filter out the admin and remove the password from the data
      const getUsers = new GetDataDb("users");
      const users = await getUsers.getData();

      response.send(users);
    });
    super.getRouter().patch("/users", async (request, response) => {
      const updates = request.body;
      const transformedUpdates = updates.map((update) => {
        // get the propertiesof the request body
        const id = Object.keys(update)[0];
        // get the value of the property
        const status = update[id];
        // return an object with the id and the status
        return { _id: id, status: status };
      });
      transformedUpdates.forEach(async (update) => {
        await User.findByIdAndUpdate(update._id, { status: update.status });
      });
      const getUsers = new GetDataDb("users");
      const users = await getUsers.getData();
      response.send(users);
    });
    super.getRouter().get("/pictures", async (request, response) => {
      // get all the users from the database and filter out the admin and remove the password from the data
      const getPictures = new GetDataDb("pictures");
      const pictures = await getPictures.getData();
      // send back the filtered data to the admin
      // I am not going to use session here because I do not need to use this data in any other route.
      response.send(pictures);
    });
    super.getRouter().patch("/pictures", async (request, response) => {
      const updates = request.body;
      const transformedUpdates = updates.map((update) => {
        // get the propertiesof the request body
        const id = Object.keys(update)[0];
        // get the value of the property
        const status = update[id];
        // return an object with the id and the status
        return { _id: id, status: status };
      });
      transformedUpdates.forEach(async (update) => {
        await Picture.findByIdAndUpdate(update._id, {
          status: update.status,
        });
      });
      const getPictures = new GetDataDb("pictures");
      const pictures = await getPictures.getData();
      response.send(pictures);
    });
    // route for updating the user's details on the admin page
    super.getRouter().put("/users/:id", async (request, response) => {
      const id = request.params.id;
      const {
        inputFirstName,
        inputLastName,
        username,
        email,
        phoneNum,
        status,
      } = request.body;
      try {
        await User.findOneAndUpdate(
          { _id: id },
          {
            firstName: inputFirstName,
            lastName: inputLastName,
            userName: username,
            email: email,
            phoneNumber: phoneNum,
            status: status,
          },
          { new: true }
        );
        const getUsers = new GetDataDb("users");
        const users = await getUsers.getData();
        response.send(users);
      } catch (error) {
        console.log(error);
      }
    });
    super.getRouter().delete("/users/:id", async (request, response) => {
      // get the id of the user to be deleted
      const id = request.params.id;
      try {
        await User.findByIdAndDelete(id);
        const getUsers = new GetDataDb("users");
        const users = await getUsers.getData();
        // send back the filtered data to the admin
        response.send(users);
      } catch (error) {
        console.log(error);
      }
    });
  }
}
// instantiate the session class
module.exports = new Admin();
