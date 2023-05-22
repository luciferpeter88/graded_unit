import React, { useContext, useState } from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import navContext from "../../../../context_Reducer/nav/navContext";
import Input from "../../../UI/shared/Input";
import { ListBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";
import context from "../../../../services/Admin/adminContext";

function Helpers() {
  const { navState } = useContext(navContext);
  const [id, setId] = useState("");
  const {
    adminStateServices: { users },
  } = useContext(context);
  function onSelect(e) {
    setId(e.value[0]);
    // console.log(e);
  }
  // console.log(id);
  // console.log(users, "users");
  let people = {};
  let filteredPerson = {};
  if (users.hasData) {
    people = users.dataFromServer.map((user) => ({
      id: user._id,
      text: user.firstName + " " + user.lastName,
    }));
    if (!id) {
      setId(users.dataFromServer[0]._id);
    }
    filteredPerson = users.dataFromServer.filter((user) => user._id === id);
  }
  // console.log(filteredPerson, "filtered");
  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />

      <div className="flex flex-wrap justify-center items-center p-5 gap-x-5">
        <div className="w-full xl:w-[30%] mb-4 xl:mb-0 shadow bg-white dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl h-96 overflow-y-scroll">
          <ListBoxComponent
            dataSource={people}
            fields={{ text: "text", value: "id" }}
            onChange={onSelect}
            selectionSettings={{ mode: "single" }}
          />
        </div>
        <div className="w-full xl:w-2/3">
          <div className="bg-white  rounded-lg flex flex-col gap-y-3 shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg p-5 items-start">
            <div className="text-green-900 font-semibold text-center text-xl">
              Profile Details
            </div>
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
                src={
                  filteredPerson.length > 0
                    ? filteredPerson[0].profilePicture
                    : null
                }
                alt=""
              />
            </div>
            <div>
              <h3 className="text-green-900 text-sm font-semibold">About Me</h3>
              <p className=" text-gray-500 mt-3 w-[90%]">
                {filteredPerson.length > 0 ? filteredPerson[0].about : null}
              </p>
              <p className="text-green-900 text-sm font-semibold mt-3">
                Current Status:{" "}
                <span
                  className={`block mt-1${
                    filteredPerson.length > 0 &&
                    filteredPerson[0].status === "active"
                      ? " text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {filteredPerson.length > 0
                    ? filteredPerson[0].status.toUpperCase()
                    : null}
                </span>
              </p>
            </div>
            <form>
              <div className="flex flex-wrap mt-5 gap-y-3">
                <Input
                  label="First name"
                  id="inputFirstName"
                  type="text"
                  placeholder="Jane"
                  defaultValue={
                    filteredPerson.length > 0
                      ? filteredPerson[0].firstName
                      : null
                  }
                />
                <Input
                  label="Last name"
                  id="inputLastName"
                  type="text"
                  placeholder="Smith"
                  defaultValue={
                    filteredPerson.length > 0
                      ? filteredPerson[0].lastName
                      : null
                  }
                />
                <Input
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="Jane"
                  defaultValue={
                    filteredPerson.length > 0
                      ? filteredPerson[0].userName
                      : null
                  }
                />
                <Input
                  label="Email"
                  id="email"
                  type="text"
                  placeholder="jane@gmail.com"
                  defaultValue={
                    filteredPerson.length > 0 ? filteredPerson[0].email : null
                  }
                />
                <Input
                  label="Phone number"
                  id="phoneNum"
                  type="tel"
                  placeholder="07401772020"
                  defaultValue={
                    filteredPerson.length > 0
                      ? filteredPerson[0].phoneNumber
                      : null
                  }
                />
                <Input
                  htmlFor="status"
                  label="Status"
                  id="status"
                  type="text"
                  inputType="select"
                  defaultValue=""
                />
              </div>
              <div className=" px-2 mt-5 flex gap-x-3">
                <button
                  className="items-center px-3 py-2 text-sm font text-center text-white   bg-green-900 h-10 w-32 rounded font-medium cursor-pointer"
                  type="button"
                >
                  Save changes
                </button>
                <button
                  className="items-center px-3 py-2 text-sm font text-center text-white   bg-red-900 h-10 w-32 rounded font-medium cursor-pointer"
                  type="button"
                >
                  Delete Person
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helpers;
