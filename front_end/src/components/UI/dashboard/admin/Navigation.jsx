import React from "react";
import { IonIcon } from "@ionic/react";
import "../../../../styles/dashboard/dashboard.css";
import {
  homeOutline,
  peopleOutline,
  personOutline,
  calendarNumberOutline,
  cameraOutline,
  logOutOutline,
} from "ionicons/icons";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <IonIcon icon={personOutline} />
            </span>
            <span className="title">Admin</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span className="icon">
              <IonIcon icon={homeOutline} />
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span className="icon">
              <IonIcon icon={peopleOutline} />
            </span>
            <span className="title">Helpers</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span className="icon">
              <IonIcon icon={cameraOutline} />
            </span>
            <span className="title">Gallery</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IonIcon icon={calendarNumberOutline} />
            </span>
            <span className="title">Events</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span className="icon">
              <IonIcon icon={logOutOutline} />
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
