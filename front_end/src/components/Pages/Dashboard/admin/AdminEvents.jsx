import React, { useContext, useEffect } from "react";
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
import context from "../../../../services/Admin/adminContext";
import makingRequest from "../../../../services/request/makingRequest";

function AdminEvents() {
  const { navState } = useContext(navContext);
  // context for manipulating the data from the server
  const {
    adminDispatchServices,
    adminStateServices: { booking },
  } = useContext(context);
  // will be using context
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // Month is 0-indexed, so January is 0 and December is 11
  const day = today.getDate();

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
        "http://localhost:4000/events/create",
        adminDispatchServices,
        "UPDATE_BOOKING_ADD",
        args.data
      );
    }
    if (args.requestType === "eventRemove") {
      makingRequest(
        "post",
        "http://localhost:4000/events/delete",
        adminDispatchServices,
        "UPDATE_BOOKING_DELETE",
        { id: args.data[0].Id }
      );
    }
    if (args.requestType === "eventChange") {
      adminDispatchServices({
        type: "UPDATE_BOOKING_EDIT",
        payload: [args.data],
      });
      makingRequest(
        "post",
        "http://localhost:4000/events/edit",
        adminDispatchServices,
        "UPDATE_BOOKING_EDIT",
        args.data
      );
    }
  };
  useEffect(() => {
    // get the data from the server
    makingRequest(
      "get",
      "http://localhost:4000/events",
      adminDispatchServices,
      "GET_BOOKING"
    );
  }, [booking.fetch, adminDispatchServices]);
  console.log(booking, "AdminEVENTSComponent");

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />
      <div className=" p-5">
        <ScheduleComponent
          actionBegin={onActionBegin}
          popupOpen={onPopupOpen}
          height="550px"
          currentView="Month"
          selectedDate={new Date(year, month, day)}
          eventSettings={{
            dataSource: booking.hasData ? booking.dataFromServer : null,
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
