import React, { useEffect, useContext } from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import "../../../../styles/dashboard/adminevents.css";
import profileContext from "../../../../services/Profile/profileContext";
import makingRequest from "../../../../services/request/makingRequest";
import UploadPictures from "./UploadPictures";

function Pictures() {
  const { profileDispatchServices, profileStateServices } =
    useContext(profileContext);
  // make a get request to the server immediately the component is mounted to get the profile pictures
  // useEffect(() => {
  //   makingRequest(
  //     "get",
  //     "http://localhost:4000/profile/pictures",
  //     profileDispatchServices,
  //     "GET_PICTURES"
  //   );
  // }, [profileDispatchServices]);

  // these are dummy data for the tab component
  let headerText = [
    { text: "All Pictures" },
    { text: "My Pictures" },
    { text: "Pending Pictures" },
    { text: "Declined Pictures" },
    { text: "Upload Picture" },
  ];
  function allPictures() {
    return (
      <div className=" mt-5">
        <h1>All Pictures</h1>
      </div>
    );
  }
  function myPictures() {
    return (
      <div className=" mt-5">
        <h1>My Pictures</h1>
      </div>
    );
  }

  return (
    <TabComponent heightAdjustMode="Auto">
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={allPictures} />
        <TabItemDirective header={headerText[1]} content={myPictures} />
        <TabItemDirective header={headerText[2]} content={myPictures} />
        <TabItemDirective header={headerText[3]} content={myPictures} />
        <TabItemDirective header={headerText[4]} content={UploadPictures} />
      </TabItemsDirective>
    </TabComponent>
  );
}

export default Pictures;
