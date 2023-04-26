import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import "../../../../styles/dashboard/adminevents.css";

function Pictures() {
  // these are dummy data for the tab component
  let headerText = [
    { text: "All Pictures" },
    { text: "My Pictures" },
    { text: "Declined Pictures" },
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
      </TabItemsDirective>
    </TabComponent>
  );
}

export default Pictures;
