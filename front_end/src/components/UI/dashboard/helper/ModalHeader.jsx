import React, { useContext } from "react";
import profileContext from "../../../../context_Reducer/profile/profileContext";
function ModalHeader() {
  const { profileState } = useContext(profileContext);

  switch (profileState.id) {
    case "edit":
      return (
        <p className=" font-medium text-green-900 text-lg">Edit Your Profile</p>
      );
    case "apply":
      return (
        <p className=" font-medium text-green-900 text-lg">
          Apply for disclosure
        </p>
      );
    case "pictures":
      return (
        <p className=" font-medium text-green-900 text-lg">Uploaded Pictures</p>
      );
    case "appointment":
      return (
        <p className=" font-medium text-green-900 text-lg">Book appointments</p>
      );
    default: {
      return <p>None</p>;
    }
  }
}

export default ModalHeader;
