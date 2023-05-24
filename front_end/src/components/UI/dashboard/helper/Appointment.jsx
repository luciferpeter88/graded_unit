import React, { useContext, useEffect } from "react";
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
import makingRequest from "../../../../services/request/makingRequest";

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
      makingRequest(
        "post",
        "http://localhost:4000/profile/booking/create",
        profileDispatchServices,
        "UPDATE_PROFILE_BOOKING_ADD",
        args.data
      );
    }
    if (args.requestType === "eventRemove") {
      makingRequest(
        "post",
        "http://localhost:4000/profile/booking/delete",
        profileDispatchServices,
        "UPDATE_PROFILE_BOOKING_DELETE",
        { id: args.data[0].Id }
      );
    }
    if (args.requestType === "eventChange") {
      makingRequest(
        "post",
        "http://localhost:4000/profile/booking/update",
        profileDispatchServices,
        "UPDATE_BOOKING_EDIT",
        args.data
      );
    }
  };
  useEffect(() => {
    makingRequest(
      "get",
      "http://localhost:4000/profile/booking",
      profileDispatchServices,
      "GET_APPOINTMENT"
    );
  }, [profileDispatchServices]);
  return (
    <div>
      <ScheduleComponent
        height="100%"
        currentView="Month"
        popupOpen={onPopupOpen}
        actionBegin={onActionBegin}
        eventSettings={{
          dataSource: profileBooking.hasData
            ? profileBooking.dataFromServer
            : null,
        }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Appointment;
