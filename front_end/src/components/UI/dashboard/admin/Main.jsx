import React, { useContext } from "react";
import "../../../../styles/dashboard/dashboard.css";
import {
  menuOutline,
  searchOutline,
  peopleOutline,
  cloudUploadOutline,
  hourglassOutline,
} from "ionicons/icons";
import Card from "./Card";
import TopBar from "./TopBar";
import navContext from "../../../../context_Reducer/nav/navContext";
import test from "../../../../assets/images/test/test.jpg";

const Main = () => {
  const { navState } = useContext(navContext);
  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />

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
        <div className="recentOrders shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg">
          <div className="cardHeader">
            <h2>Helpers Availability</h2>
            <a href="#" className="btn">
              Events
            </a>
          </div>

          <table className="flex flex-col">
            <thead>
              <tr className="flex justify-between py-5">
                <th>Name</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex justify-between items-center rounded">
                <td className="flex gap-x-3 items-center">
                  <img src={test} alt="" className="h-14 w-14" />
                  Peter Kaszap Nagy
                </td>
                <td>05/07/2023</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="flex justify-between items-center rounded">
                <td className="flex gap-x-3 items-center">
                  <img src={test} alt="" className="h-14 w-14" />
                  Peter Kaszap Nagy
                </td>
                <td>05/07/2023</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="recentCustomers shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg">
          <div className="cardHeader">
            <h2>Registered Helpers</h2>
          </div>
          <div className=" mt-5 text-white flex flex-col gap-y-2">
            <div className=" flex gap-x-3 items-center bg-green-900 w-full p-3 rounded">
              <img src={test} alt="" className="h-14 w-14" />
              <h2>Peter Kaszap Nagy</h2>
            </div>
            <div className=" flex gap-x-3 items-center bg-green-900 w-full p-3 rounded">
              <img src={test} alt="" className="h-14 w-14" />
              <h2>Peter Kaszap Nagy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
