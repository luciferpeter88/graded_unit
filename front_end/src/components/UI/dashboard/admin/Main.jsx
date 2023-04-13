import React from "react";
import "../../../../styles/dashboard/dashboard.css";
import { IonIcon } from "@ionic/react";
import {
  menuOutline,
  searchOutline,
  peopleOutline,
  cloudUploadOutline,
  hourglassOutline,
} from "ionicons/icons";
import Card from "./Card";

const Main = () => {
  return (
    <div className="main">
      <div className="topbar">
        <div className="toggle">
          <IonIcon icon={menuOutline} />
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <IonIcon icon={searchOutline} />
          </label>
        </div>

        <div className="user">
          <img src="" alt="" />
        </div>
      </div>

      <div className="cardBox">
        <Card icon={peopleOutline} text="Registered Helpers" number="1,504" />
        <Card icon={cloudUploadOutline} text="Uploaded Picture" number="80" />
        <Card
          icon={hourglassOutline}
          text="Pending registration"
          number="284"
        />
        <Card icon={hourglassOutline} text="Pending Pictures" number="2" />
      </div>

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Helpers Availability</h2>
            <a href="#" className="btn">
              Events
            </a>
          </div>

          <table>
            {/* <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead> */}

            <tbody>{/* Add table rows here */}</tbody>
          </table>
        </div>

        <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Registered Helpers</h2>
          </div>

          <table>
            <tbody>{/* Add table rows here */}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;