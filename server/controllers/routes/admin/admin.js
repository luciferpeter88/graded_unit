const BaseRoute = require("../shared/baseRoute");
const { connection } = require("mongoose");

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
      const users = await (
        await connection.db.collection("users").find().toArray()
      )
        .filter((user) => user.role !== "admin")
        .map((user) => {
          const { password, ...rest } = user;
          return rest;
        });
      // send back the filtered data to the admin
      // I am not going to use session here because I do not need to use this data in any other route.
      response.send(users);
    });
  }
}
// instantiate the session class
module.exports = new Admin();
