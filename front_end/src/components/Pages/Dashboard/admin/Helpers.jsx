import React, { useContext } from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import navContext from "../../../../context_Reducer/nav/navContext";
import Input from "../../../UI/dashboard/admin/Input";

function Helpers() {
  const { navState } = useContext(navContext);

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />

      <div className="flex flex-wrap justify-center items-center p-5 gap-x-5">
        <div className="w-full xl:w-[30%] mb-4 xl:mb-0 shadow bg-white dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl h-96">
          Users
        </div>
        <div className="w-full xl:w-2/3">
          <div className="bg-white  rounded-lg flex flex-col gap-y-3 shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg p-5">
            <div className="text-green-900 font-semibold text-center text-xl">
              Profile Details
            </div>
            <div className="text-center">
              <img
                className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </div>

            <form>
              <div className="flex flex-wrap mt-3 gap-y-3">
                <Input
                  label="First name"
                  id="inputFirstName"
                  type="text"
                  placeholder="Jane"
                  defaultValue="Jane"
                />
                <Input
                  label="Last name"
                  id="inputLastName"
                  type="text"
                  placeholder="Smith"
                  defaultValue="Smith"
                />
                <Input
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="Jane"
                  defaultValue="Jane"
                />
                <Input
                  label="Email"
                  id="email"
                  type="text"
                  placeholder="jane@gmail.com"
                  defaultValue="jane@gmail.com"
                />
                <Input
                  label="Phone number"
                  id="phoneNum"
                  type="tel"
                  placeholder="07401772020"
                  defaultValue="07401772020"
                />
                <Input
                  htmlFor="status"
                  label="Status"
                  id="status"
                  type="text"
                  placeholder="Approved"
                  defaultValue="Approved"
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
