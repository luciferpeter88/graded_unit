import React from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";

function Helpers() {
  return (
    <div className="main">
      <TopBar menu={menuOutline} search={searchOutline} />
      Helpers
    </div>
  );
}

export default Helpers;
