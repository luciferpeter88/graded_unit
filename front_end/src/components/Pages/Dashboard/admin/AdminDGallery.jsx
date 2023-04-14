import React from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";

function AdminDGallery() {
  return (
    <div className="main">
      <TopBar menu={menuOutline} search={searchOutline} />
      AdminDGallery
    </div>
  );
}

export default AdminDGallery;
