import React, { useContext } from "react";
import profileContext from "../../../../context_Reducer/profile/profileContext";
import EditProfile from "./EditProfile";
import Apply from "./Apply";
import Pictures from "./Pictures";
import Appointment from "./Appointment";

function ModalInner() {
  // get the state from the context
  const { profileState } = useContext(profileContext);
  // write a switch statement to render the appropriate component
  switch (profileState.id) {
    case "edit":
      return <EditProfile />;
    case "apply":
      return <Apply />;
    case "pictures":
      return <Pictures />;
    case "appointment":
      return <Appointment />;
    default: {
      return <p>None</p>;
    }
  }
}

export default ModalInner;
