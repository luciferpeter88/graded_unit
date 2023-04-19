import React from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import Events from "../../../UI/syncfusion/Events";
import Upload from "../../../UI/syncfusion/Upload";
function AdminEvents() {
  return (
    <div className="main">
      <TopBar menu={menuOutline} search={searchOutline} />
      <div className=" p-5 flex gap-x-5">
        <Events />
        <Upload />
      </div>
    </div>
  );
}

export default AdminEvents;
