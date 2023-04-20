import React, { useContext } from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import navContext from "../../../../context_Reducer/nav/navContext";
import Input from "../../../UI/dashboard/admin/Input";
import { ListBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";
function Helpers() {
  const { navState } = useContext(navContext);
  function onSelect(e) {
    console.log(e); // You can access the selected item's data here
  }
  const people = [
    {
      id: 1,
      text: "Person One",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name One",
      email: "email1@example.com",
      homeAddress: "Address 1",
      phone: "123-456-7890",
    },
    {
      id: 2,
      text: "Person Two",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Two",
      email: "email2@example.com",
      homeAddress: "Address 2",
      phone: "234-567-8910",
    },
    {
      id: 3,
      text: "Person Three",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Three",
      email: "email3@example.com",
      homeAddress: "Address 3",
      phone: "345-678-9120",
    },
    {
      id: 4,
      text: "Person Four",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Four",
      email: "email4@example.com",
      homeAddress: "Address 4",
      phone: "456-789-1230",
    },
    {
      id: 5,
      text: "Person Five",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Five",
      email: "email5@example.com",
      homeAddress: "Address 5",
      phone: "567-891-2340",
    },
    {
      id: 6,
      text: "Person Six",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Six",
      email: "email6@example.com",
      homeAddress: "Address 6",
      phone: "678-912-3450",
    },
    {
      id: 7,
      text: "Person Seven",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Seven",
      email: "email7@example.com",
      homeAddress: "Address 7",
      phone: "789-123-4560",
    },
    {
      id: 8,
      text: "Person Eight",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Eight",
      email: "email8@example.com",
      homeAddress: "Address 8",
      phone: "891-234-5670",
    },
    {
      id: 9,
      text: "Person Nine",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Nine",
      email: "email9@example.com",
      homeAddress: "Address 9",
      phone: "912-345-6780",
    },
    {
      id: 10,
      text: "Person Ten",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Ten",
      email: "email10@example.com",
      homeAddress: "Address 10",
      phone: "123-456-7891",
    },
    {
      id: 11,
      text: "Person Eleven",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Eleven",
      email: "email11@example.com",
      homeAddress: "Address 11",
      phone: "234-567-8911",
    },
    {
      id: 12,
      text: "Person Twelve",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Twelve",
      email: "email12@example.com",
      homeAddress: "Address 12",
      phone: "345-678-9121",
    },
    {
      id: 13,
      text: "Person Thirteen",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Thirteen",
      email: "email13@example.com",
      homeAddress: "Address 13",
      phone: "456-789-1231",
    },
    {
      id: 14,
      text: "Person Fourteen",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Fourteen",
      email: "email14@example.com",
      homeAddress: "Address 14",
      phone: "567-891-2341",
    },
    {
      id: 15,
      text: "Person Fifteen",
      imgUrl: "https://via.placeholder.com/50",
      fullName: "Full Name Fifteen",
      email: "email15@example.com",
      homeAddress: "Address 15",
      phone: "678-912-3451",
    },
  ];

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />

      <div className="flex flex-wrap justify-center items-center p-5 gap-x-5">
        <div className="w-full xl:w-[30%] mb-4 xl:mb-0 shadow bg-white dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl h-96 overflow-y-scroll ">
          <ListBoxComponent
            dataSource={people}
            onChange={onSelect}
            selectionSettings={{ mode: "single" }}
          />
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
