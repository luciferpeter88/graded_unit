const BaseRoute = require("../shared/baseRoute");
const GetDataDb = require("./getDataDb");
const EventModel = require("../../../models/events");

class Event extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }
  initializeRoutes() {
    super.getRouter().get("/", async (request, response) => {
      const getDataDb = new GetDataDb("events");
      const events = await getDataDb.getData();
      response.send(events);
    });
    super.getRouter().post("/create", async (request, response) => {
      // get the data from the database
      const getDataDb = new GetDataDb("events");
      const events = await getDataDb.getData();
      // add the new event to the data with the existing data from the database
      const newEvents = [...events, ...request.body];
      // delete all the data from the database
      await EventModel.deleteMany({});
      newEvents.map(async (event) => {
        // create a new event
        const newEvent = new EventModel({
          Subject: event.Subject,
          StartTime: event.StartTime,
          EndTime: event.EndTime,
          IsAllDay: event.IsAllDay,
          Id: event.Id,
          Location: event.Location || "",
          Description: event.Description || "",
        });
        // save the new event to the database
        await newEvent.save();
      });
      const getUpdated = new GetDataDb("events");
      const updated = await getUpdated.getData();
      response.send(updated);
    });
    super.getRouter().post("/delete", async (request, response) => {
      await EventModel.findOneAndDelete({ Id: request.body.id });
      const getDataDb = new GetDataDb("events");
      const events = await getDataDb.getData();
      response.send(events);
    });
    super.getRouter().post("/edit", async (request, response) => {
      await EventModel.findOneAndUpdate(
        { Id: request.body.Id },
        {
          Subject: request.body.Subject,
          StartTime: request.body.StartTime,
          EndTime: request.body.EndTime,
          IsAllDay: request.body.IsAllDay,
          Location: request.body.Location || "",
          Description: request.body.Description || "",
        }
      );
      const getDataDb = new GetDataDb("events");
      const events = await getDataDb.getData();
      response.send(events);
    });
  }
}
module.exports = new Event();
