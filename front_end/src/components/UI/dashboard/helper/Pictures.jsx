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
import AllPictures from "./AllPictures";
import ApprovedPictures from "./ApprovedPictures";
import PendingPictures from "./PendingPictures";

function Pictures() {
  const { profileDispatchServices } = useContext(profileContext);
  // make a get request to the server immediately the component is mounted to get the profile pictures
  useEffect(() => {
    makingRequest(
      "get",
      "http://localhost:4000/profile/pictures",
      profileDispatchServices,
      "GET_PICTURES"
    );
  }, [profileDispatchServices]);

  // these are dummy data for the tab component
  let headerText = [
    { text: "All Pictures" },
    { text: "Approved Pictures" },
    { text: "Pending Pictures" },
    { text: "Upload Picture" },
  ];

  return (
    <TabComponent heightAdjustMode="Auto">
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={AllPictures} />
        <TabItemDirective header={headerText[1]} content={ApprovedPictures} />
        <TabItemDirective header={headerText[2]} content={PendingPictures} />
        <TabItemDirective header={headerText[3]} content={UploadPictures} />
      </TabItemsDirective>
    </TabComponent>
  );
}

export default Pictures;
