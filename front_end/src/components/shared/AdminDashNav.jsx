import React from "react";
import "../../styles/dashboard/dashboard.css";
import {
  homeOutline,
  peopleOutline,
  personOutline,
  calendarNumberOutline,
  cameraOutline,
  logOutOutline,
} from "ionicons/icons";
import { Outlet } from "react-router-dom";
import Nav from "../UI/navbar/admin/Nav";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="navigation">
        <ul>
          <Nav icon={personOutline} title="Admin" />
          <Nav icon={homeOutline} title="Dashboard" whereTo="/dashboard" />
          <Nav
            icon={peopleOutline}
            title="Helpers"
            whereTo="/dashboard/helpers"
          />
          <Nav
            icon={cameraOutline}
            title="Gallery"
            whereTo="/dashboard/gallery"
          />
          <Nav
            icon={calendarNumberOutline}
            title="Events"
            whereTo="/dashboard/events"
          />
          <Nav icon={logOutOutline} title="Sign Out" whereTo="/" />
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
