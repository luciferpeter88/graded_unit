import React, { useContext } from "react";
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
import profileContext from "../../../../services/Profile/profileContext";

function Appointment() {
  const {
    profileDispatchServices,
    profileStateServices: { profileBooking },
  } = useContext(profileContext);

  console.log(profileBooking, "profileBooking");
  // Hide the "All Day" checkbox and "Repeat" checkbox in the Scheduler's editor window
  const onPopupOpen = (args) => {
    if (args.type === "Editor") {
      // Find the "All Day" checkbox element in the Scheduler's DOM
      let allDayElement = args.element.querySelector(
        ".e-all-day-time-zone-row"
      );
      let repeatElement = args.element.querySelector(".e-editor");

      if (allDayElement) {
        // Hide the "All Day" checkbox
        allDayElement.style.display = "none";
        repeatElement.style.display = "none";
      }
    }
  };
  const onActionBegin = (args) => {
    if (args.requestType === "eventCreate") {
      // send the data to the reducer to update the state
      profileDispatchServices({
        type: "UPDATE_PROFILE_BOOKING_ADD",
        payload: args.data,
      });
      // console.log(args.data); // this logs the event object to the console
    }
    if (args.requestType === "eventRemove") {
      // send the data to the reducer to update the state
      profileDispatchServices({
        type: "UPDATE_PROFILE_BOOKING_DELETE",
        payload: args.data[0].Id,
      });
    }
    if (args.requestType === "eventChange") {
      profileDispatchServices({
        type: "UPDATE_PROFILE_BOOKING_EDIT",
        payload: [args.data],
      });
    }
  };
  // const data = [
  //   {
  //     Id: 1,
  //     Subject: "Meeting",
  //     StartTime: new Date(2023, 5, 15),
  //     EndTime: new Date(2023, 5, 15),
  //     IsAllDay: true,
  //     Location: "Glasgow",
  //     Description: "Test",
  //   },
  // ];
  return (
    <div>
      <ScheduleComponent
        height="100%"
        currentView="Month"
        popupOpen={onPopupOpen}
        actionBegin={onActionBegin}
        // eventSettings={{ dataSource: data }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Appointment;
