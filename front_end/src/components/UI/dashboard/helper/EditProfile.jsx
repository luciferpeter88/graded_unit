import React from "react";
import Input from "../../../UI/shared/Input";

function EditProfile() {
  return (
    <div className="w-full">
      <div className="bg-white  rounded-lg flex flex-col gap-y-3 shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg p-5 items-start">
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
        <div>
          <h3 className="text-green-900 text-sm font-semibold">About Me</h3>
          <p className=" text-gray-500 mt-3 w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
            aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
            Lorem vulputate orci eget mi, sed pulvinar.
          </p>
        </div>
        <form>
          <div className="flex flex-wrap mt-5 gap-y-3">
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
              defaultValue="Pending"
              readonly="readOnly"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
