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

function Profile() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 min-h-screen gap-5 p-5">
      <div className=" row-span-2 md:row-span-3   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
        Profile
      </div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
        Pictures
      </div>
      <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
        Avaibility
      </div>
      <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
        Apply
      </div>
      <div className=" row-span-2 col-span-1 md:col-span-2 xl:col-span-3  xl:row-span-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
        Events
      </div>
    </div>
  );
}

export default Profile;
