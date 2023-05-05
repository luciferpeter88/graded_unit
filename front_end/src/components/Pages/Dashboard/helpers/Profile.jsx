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
import {
  peopleOutline,
  calendarNumberOutline,
  cameraOutline,
} from "ionicons/icons";
import Modal from "../../../UI/dashboard/helper/Modal";
import Box from "../../../UI/dashboard/helper/Box";
import profileContext from "../../../../context_Reducer/profile/profileContext";

function Profile() {
  const { profileDispatch } = useContext(profileContext);
  function handleclick(e) {
    profileDispatch({ type: "OPEN_MODAL", payload: e.target.id });
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 grid-rows-5 md:grid-rows-3 xl:grid-cols-4  min-h-screen gap-5 p-5 overflow-hidden">
      <div className=" row-span-2 md:row-span-3   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg">
        <div className=" flex flex-col gap-y-5 items-center">
          <img
            className="w-48 h-48 object-cover rounded-full mx-auto mb-2"
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
          />
          <h1 className=" text-2xl text-gray-500 font-medium">
            Peter Kaszap Nagy
          </h1>
          <p className=" text-lg text-center text-gray-500">
            Status: <span className=" text-red-900">Pending</span>
          </p>
          <button
            className="  text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium "
            id="edit"
            onClick={handleclick}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <Box
        icon={cameraOutline}
        id="pictures"
        text="Uploaded Photos"
        handleclick={handleclick}
      />
      <Box
        icon={calendarNumberOutline}
        id="appointment"
        handleclick={handleclick}
      />
      <Box icon={peopleOutline} id="apply" handleclick={handleclick} />
      <div className="row-span-2 col-span-1 md:col-span-2 xl:col-span-3  xl:row-span-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-3 drop-shadow-lg">
        <div className=" overflow-y-scroll max-h-[55vh]">
          <ScheduleComponent height="100%" currentView="Agenda" readonly={true}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Profile;
