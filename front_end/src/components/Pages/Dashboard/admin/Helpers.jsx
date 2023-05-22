import React, { useContext, useState, useEffect } from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import navContext from "../../../../context_Reducer/nav/navContext";
import Input from "../../../UI/shared/Input";
import { ListBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";
import context from "../../../../services/Admin/adminContext";
import makingRequest from "../../../../services/request/makingRequest";
function Helpers() {
  const { navState } = useContext(navContext);
  const [id, setId] = useState("");
  // useState for selected user that will be displayed in the input fields what are coming from the server.
  const [selected, setSelected] = useState({
    inputFirstName: "",
    inputLastName: "",
    username: "",
    email: "",
    phoneNum: "",
    status: "",
  });
  const {
    adminDispatchServices,
    adminStateServices: { users },
  } = useContext(context);
  // target the id of the selected user
  function onSelect(e) {
    setId(e.value[0]);
  }
  // console.log(users, "users");
  let people = {};
  // filter the user that has the same id as the selected user
  let filteredPerson = {};
  if (users.hasData) {
    people = users.dataFromServer.map((user) => ({
      id: user._id,
      text: user.firstName + " " + user.lastName,
    }));
    // if the id is not set, set the id to the first user in the array
    if (!id) {
      setId(users.dataFromServer[0]._id);
    }
    // filter the user that has the same id as the selected user
    filteredPerson = users.dataFromServer.filter((user) => user._id === id);
  }
  // run the useEffect when the id is changed
  useEffect(() => {
    // console.log(filteredPerson, "filtereEFFECT");
    if (filteredPerson.length > 0) {
      setSelected({
        inputFirstName: filteredPerson[0].firstName,
        inputLastName: filteredPerson[0].lastName,
        username: filteredPerson[0].userName,
        email: filteredPerson[0].email,
        phoneNum: filteredPerson[0].phoneNumber,
        status: filteredPerson[0].status,
      });
    }
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    makingRequest(
      "get",
      "http://localhost:4000/admin/users",
      adminDispatchServices,
      "GET_USERS"
    );
    // eslint-disable-next-line
  }, []);

  function onChange(e) {
    setSelected({ ...selected, [e.target.id]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    makingRequest(
      "put",
      `http://localhost:4000/admin/users/${id}`,
      adminDispatchServices,
      "UPDATE_USER_PROFILE",
      selected
    );
  }
  function deleteUser(e) {
    e.preventDefault();
    makingRequest(
      "delete",
      `http://localhost:4000/admin/users/${id}`,
      adminDispatchServices,
      "DELETE_USER_PROFILE",
      selected
    );
  }
  console.log(selected, "selected");
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
                <span className="text-green-500 font-semibold mt-2">
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
                  defaultValue={selected.inputFirstName}
                  change={onChange}
                />
                <Input
                  label="Last name"
                  id="inputLastName"
                  type="text"
                  placeholder="Smith"
                  defaultValue={selected.inputLastName}
                  change={onChange}
                />
                <Input
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="Jane"
                  defaultValue={selected.username}
                  change={onChange}
                />
                <Input
                  label="Email"
                  id="email"
                  type="text"
                  placeholder="jane@gmail.com"
                  defaultValue={selected.email}
                  change={onChange}
                />
                <Input
                  label="Phone number"
                  id="phoneNum"
                  type="tel"
                  placeholder="07401772020"
                  defaultValue={selected.phoneNum}
                  change={onChange}
                />
                <Input
                  htmlFor="status"
                  label="Status"
                  id="status"
                  type="text"
                  inputType="select"
                  defaultValue={selected.status}
                  change={onChange}
                />
              </div>
              <div className=" px-2 mt-5 flex gap-x-3">
                <button
                  className="items-center px-3 py-2 text-sm font text-center text-white   bg-green-900 h-10 w-32 rounded font-medium cursor-pointer"
                  type="button"
                  onClick={onSubmit}
                >
                  Save changes
                </button>
                <button
                  className="items-center px-3 py-2 text-sm font text-center text-white   bg-red-900 h-10 w-32 rounded font-medium cursor-pointer"
                  type="button"
                  onClick={deleteUser}
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
