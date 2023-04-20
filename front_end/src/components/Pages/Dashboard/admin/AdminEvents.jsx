import React, { useContext } from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import navContext from "../../../../context_Reducer/nav/navContext";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import "../../../../styles/dashboard/adminevents.css";

function AdminEvents() {
  const { navState } = useContext(navContext);
  // will be using context
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // Month is 0-indexed, so January is 0 and December is 11
  const day = today.getDate();
  // dummy data
  const eventData = [
    {
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      StartTime: new Date(2023, 4, 15, 9, 30),
      EndTime: new Date(2023, 4, 15, 11, 0),
      ImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0YYH7OjulBt1Iu4UdNwrYcmmqmkybXDb7A&usqp=CAU",
    },
    {
      Id: 2,
      Subject: "Thule Air Crash Report",
      StartTime: new Date(2023, 4, 12, 12, 0),
      EndTime: new Date(2023, 4, 12, 14, 0),
      ImageUrl: "https://example.com/path/to/image2.jpg",
    },
    {
      Id: 3,
      Subject: "Blue Moon Eclipse",
      StartTime: new Date(2023, 4, 13, 9, 30),
      EndTime: new Date(2023, 4, 13, 11, 0),
      ImageUrl: "https://example.com/path/to/image2.jpg",
    },
    {
      Id: 4,
      Subject: "Meteor Showers in 2018",
      StartTime: new Date(2023, 6, 14, 13, 0),
      EndTime: new Date(2023, 6, 14, 14, 30),
      ImageUrl: "https://example.com/path/to/image2.jpg",
    },
  ];
  const onActionBegin = (args) => {
    if (args.requestType === "eventCreate") {
      const newEventData = args.data[0];
      console.log("New event data:", newEventData);
      test();
      // Handle the new event data, e.g. send it to the server or update the state
    }
  };
  function test() {
    console.log("test");
  }

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />
      <div className=" p-5">
        <ScheduleComponent
          actionBegin={onActionBegin}
          height="550px"
          currentView="Month"
          selectedDate={new Date(year, month, day)}
          eventSettings={{
            dataSource: eventData,
            allowAdding: true,
            allowEditing: true,
          }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
}

export default AdminEvents;
