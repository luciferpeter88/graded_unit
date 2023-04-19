import React from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import Members from "../../../UI/syncfusion/Members";

function Helpers() {
  return (
    <div className="main">
      <TopBar menu={menuOutline} search={searchOutline} />
      <Members />
    </div>
  );
}

export default Helpers;
