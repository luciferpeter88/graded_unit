import React from "react";
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

function Appointment() {
  return (
    <div>
      <ScheduleComponent height="100%" currentView="Month">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Appointment;
