import React, { useContext, useEffect } from "react";
import Input from "../../../UI/shared/Input";
import profileContext from "../../../../services/Profile/profileContext";
import makingRequest from "../../../../services/request/makingRequest";

function EditProfile() {
  // get the profile details from the context
  const { profileDispatchServices, profileStateServices } =
    useContext(profileContext);
  // make a get request to the server immediately the component is mounted to get the profile details
  useEffect(() => {
    makingRequest(
      "get",
      "http://localhost:4000/profile/details",
      profileDispatchServices,
      "GET_PROFILE"
    );
    // eslint-disable-next-line
  }, []);
  // destructure the profile details from the state
  const {
    profileDetails: { hasData, data },
  } = profileStateServices;
  // collect the data from the input fields
  function collectData(event) {
    // get the name and the type of the input field
    const { name, type } = event.target;
    // upload the profile picture
    if (type === "file") {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          profileDispatchServices({
            type: "UPDATE_PROFILE",
            payload: { name, value: reader.result },
          });
        };
        reader.readAsDataURL(file);
      }
    }
    // update the profile details
    else {
      profileDispatchServices({
        type: "UPDATE_PROFILE",
        payload: { name, value: event.target.value },
      });
    }
  }

  return (
    <React.Fragment>
      <div className="w-full">
        <div className="bg-white  rounded-lg flex flex-col gap-y-3 shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg p-5 items-start">
          <div className="text-green-900 font-semibold text-center text-xl">
            Profile Details
          </div>
          <div className="flex">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
              src={hasData ? data.profilePicture : ""}
              alt=""
            />
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={collectData}
            />
          </div>
          <div className=" w-full px-3">
            <h3 className="text-green-900 text-sm font-semibold">About Me</h3>
            <textarea
              cols="30"
              rows="10"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              value={hasData ? data.about : ""}
              name="about"
              onChange={collectData}
            ></textarea>
          </div>
          <form>
            <div className="flex flex-wrap mt-5 gap-y-3">
              <Input
                label="First name"
                id="inputFirstName"
                type="text"
                placeholder="Jane"
                defaultValue={hasData ? data.firstName : ""}
                name="firstName"
                change={collectData}
              />
              <Input
                label="Last name"
                id="inputLastName"
                type="text"
                placeholder="Smith"
                defaultValue={hasData ? data.lastName : ""}
                name="lastName"
                change={collectData}
              />
              <Input
                label="Username"
                id="username"
                type="text"
                placeholder="Jane"
                defaultValue={hasData ? data.userName : ""}
                name="userName"
                change={collectData}
              />
              <Input
                label="Email"
                id="email"
                type="text"
                placeholder="jane@gmail.com"
                defaultValue={hasData ? data.email : ""}
                readonly="readOnly"
              />
              <Input
                label="Phone number"
                id="phoneNum"
                type="tel"
                placeholder="07401772020"
                defaultValue={hasData ? data.phoneNumber : ""}
                name="phoneNumber"
                change={collectData}
              />
              <Input
                htmlFor="status"
                label="Status"
                id="status"
                type="text"
                defaultValue={hasData ? data.status : ""}
                readonly="readOnly"
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditProfile;
