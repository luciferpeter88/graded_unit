import React, { useContext, useEffect } from "react";
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
import context from "../../../../services/Admin/adminContext";
import makingRequest from "../../../../services/request/makingRequest";

const Main = () => {
  const { navState } = useContext(navContext);
  // get the reducer functions and the initial state from the context
  const {
    adminDispatchServices,
    adminStateServices: { users, pictures },
  } = useContext(context);

  useEffect(() => {
    makingRequest(
      "get",
      "http://localhost:4000/admin/users",
      adminDispatchServices,
      "GET_USERS"
    );
    makingRequest(
      "get",
      "http://localhost:4000/admin/pictures",
      adminDispatchServices,
      "GET_PICTURES"
    );
  }, [adminDispatchServices]);
  // console.log(users, "Data from the context");

  //dummy data for testing
  const headers = ["Name", "Status", "Action"];
  const headers2 = ["Image", "Status", "Action"];
  const headers3 = ["Name", "Status", "Action"];
  const headers4 = ["Image", "Status", "Action"];

  const data = users.hasData
    ? users.dataFromServer.map((user) => {
        return {
          name: user.firstName + " " + user.lastName,
          status: user.status,
        };
      })
    : [];
  // data will be replaced with the data from the database and functions will be added to the buttons to make various requests to the database

  const data2 = pictures.hasData
    ? pictures.dataFromServer.map((picture) => {
        return {
          name: picture.uploadedBy,
          status: picture.status,
        };
      })
    : [];

  const data3 = users.hasData
    ? users.dataFromServer
        .filter((filter) => filter.status === "pending")
        .map((user) => {
          return {
            name: user.firstName + " " + user.lastName,
            status: user.status,
          };
        })
    : [];

  const data4 = pictures.hasData
    ? pictures.dataFromServer
        .filter((filtered) => filtered.status === "pending")
        .map((picture) => {
          return {
            name: picture.uploadedBy,
            status: picture.status,
          };
        })
    : [];
  const options = ["Approve", "Decline", "Pending"];
  const options2 = ["Approve", "Decline", "Pending"];
  const options3 = ["Approve", "Decline", "Pending"];
  const options4 = ["Approve", "Decline", "Pending"];

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />

      <div className="cardBox">
        <Card
          icon={peopleOutline}
          text="Registered Helpers"
          number={data.length}
          headers={headers}
          data={data}
          options={options}
        />
        <Card
          icon={cloudUploadOutline}
          text="Uploaded Pictures"
          number={data2.length}
          headers={headers2}
          data={data2}
          options={options2}
        />
        <Card
          icon={hourglassOutline}
          text="Pending registrations"
          number={data3.length}
          headers={headers3}
          data={data3}
          options={options3}
        />
        <Card
          icon={hourglassOutline}
          text="Pending Pictures"
          number={data4.length}
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
              <h2 className="btn">Events</h2>
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
          {users.hasData
            ? users.dataFromServer.map((user) => {
                return (
                  <React.Fragment>
                    <div className=" mt-5 text-white flex flex-col gap-y-2">
                      {/* dummy data for testing */}
                      <div className=" flex gap-x-3 items-center bg-green-900 w-full p-3 rounded">
                        <img
                          src={user.profilePicture}
                          alt=""
                          className="h-14 w-14"
                        />
                        <h2>{user.firstName + "" + user.lastName}</h2>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Main;
