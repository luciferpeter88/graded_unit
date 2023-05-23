const BaseRoute = require("../shared/baseRoute");
const getDb = require("../admin/getDataDb");
class Public extends BaseRoute {
  constructor() {
    // invoke the baseRoute constructor to access the class properties and methods
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  // create a method to initialize the routes
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and create a post route
    super.getRouter().get("/events", async (request, response) => {
      const db = new getDb("events");
      const events = await db.getData();
      response.send(events);
    });
    super.getRouter().get("/gallery", async (request, response) => {
      const db = new getDb("pictures");
      const pictures = await db.getData();
      response.send(pictures);
    });
  }
}
// export the user login class and instantiate it immediately
module.exports = new Public();
