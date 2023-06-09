import React, { useContext } from "react";
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
import navContext from "../../context_Reducer/nav/navContext";

const Navigation = () => {
  const { navState } = useContext(navContext);
  return (
    <React.Fragment>
      <div className={`navigation ${navState.toggleDash ? "active" : null}`}>
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
