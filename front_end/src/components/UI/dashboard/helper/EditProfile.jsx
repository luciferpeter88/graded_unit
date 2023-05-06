import React, { useContext, useEffect } from "react";
import Input from "../../../UI/shared/Input";
import profileContext from "../../../../services/Profile/profileContext";
import makingRequest from "../../../../services/request/makingRequest";

function EditProfile() {
  // get the profile details from the context
  const { profileDispatchServices, profileStateServices } =
    useContext(profileContext);
  // make a request to the server to get the profile details
  useEffect(() => {
    makingRequest(
      "get",
      "http://localhost:4000/profile/details",
      profileDispatchServices,
      "GET_PROFILE"
    );
  }, []);
  // destructure the profile details from the state
  const {
    profileDetails: { hasData, data },
  } = profileStateServices;

  return (
    <React.Fragment>
      <div className="w-full">
        <div className="bg-white  rounded-lg flex flex-col gap-y-3 shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg p-5 items-start">
          <div className="text-green-900 font-semibold text-center text-xl">
            Profile Details
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
              src={hasData ? data.profilePicture : null}
              alt=""
            />
            <button>Upload</button>
          </div>
          <div>
            <h3 className="text-green-900 text-sm font-semibold">About Me</h3>
            <p className=" text-gray-500 mt-3 w-[90%]">
              {hasData ? data.about : null}
            </p>
          </div>
          <form>
            <div className="flex flex-wrap mt-5 gap-y-3">
              <Input
                label="First name"
                id="inputFirstName"
                type="text"
                placeholder="Jane"
                defaultValue={hasData ? data.firstName : null}
              />
              <Input
                label="Last name"
                id="inputLastName"
                type="text"
                placeholder="Smith"
                defaultValue={hasData ? data.lastName : null}
              />
              <Input
                label="Username"
                id="username"
                type="text"
                placeholder="Jane"
                defaultValue={hasData ? data.userName : null}
              />
              <Input
                label="Email"
                id="email"
                type="text"
                placeholder="jane@gmail.com"
                defaultValue={hasData ? data.email : null}
                readonly="readOnly"
              />
              <Input
                label="Phone number"
                id="phoneNum"
                type="tel"
                placeholder="07401772020"
                defaultValue={hasData ? data.phoneNumber : null}
              />
              <Input
                htmlFor="status"
                label="Status"
                id="status"
                type="text"
                defaultValue={hasData ? data.status : null}
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
