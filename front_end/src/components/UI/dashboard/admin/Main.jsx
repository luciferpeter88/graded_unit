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
import { NavLink } from "react-router-dom";

const Main = () => {
  const { navState } = useContext(navContext);
  //dummy data for testing
  const headers = ["Name", "Status", "Action"];
  const headers2 = ["Image", "Status", "Action"];
  const headers3 = ["Name", "Status", "Action"];
  const headers4 = ["Image", "Status", "Action"];

  const data = [
    { name: "Alice", status: "Approved" },
    { name: "Bob", status: "Declined" },
    { name: "Charlie", status: "Pending" },
    { name: "David", status: "Approved" },
    { name: "Eva", status: "Declined" },
  ];
  const data2 = [
    { name: "test", status: "Approved" },
    { name: "test", status: "Declined" },
    { name: "test", status: "Pending" },
    { name: "test", status: "Approved" },
    { name: "test", status: "Declined" },
  ];
  const data3 = [
    { name: "Alice", status: "Pending" },
    { name: "Bob", status: "Pending" },
    { name: "Charlie", status: "Pending" },
    { name: "David", status: "Pending" },
    { name: "Eva", status: "Pending" },
  ];
  const data4 = [
    { name: "test", status: "Pending" },
    { name: "test", status: "Pending" },
    { name: "test", status: "Pending" },
    { name: "test", status: "Pending" },
    { name: "test", status: "Pending" },
  ];
  const options = ["Approved", "Declined", "Pending"];
  const options2 = ["Approved", "Declined", "Pending"];
  const options3 = ["Approved", "Declined", "Pending"];
  const options4 = ["Approved", "Declined", "Pending"];

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />

      <div className="cardBox">
        <Card
          icon={peopleOutline}
          text="Registered Helpers"
          number="1,504"
          headers={headers}
          data={data}
          options={options}
        />
        <Card
          icon={cloudUploadOutline}
          text="Uploaded Pictures"
          number="80"
          headers={headers2}
          data={data2}
          options={options2}
        />
        <Card
          icon={hourglassOutline}
          text="Pending registrations"
          number="284"
          headers={headers3}
          data={data3}
          options={options3}
        />
        <Card
          icon={hourglassOutline}
          text="Pending Pictures"
          number="2"
          headers={headers4}
          data={data4}
          options={options4}
        />
      </div>

      <div className="details">
        <div className="recentOrders shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg">
          <div className="cardHeader">
            <h2>Helpers Availability</h2>
            <NavLink to="/dashboard/events">
              {/* eslint-disable-next-line */}
              <a className="btn">Events</a>
            </NavLink>
          </div>

          <table className="flex flex-col">
            <thead>
              <tr className="flex justify-between py-5">
                <th>Name</th>
                <th>Availability</th>
              </tr>
            </thead>
            {/* dummy data for testing */}
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
            {/* dummy data for testing */}
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
