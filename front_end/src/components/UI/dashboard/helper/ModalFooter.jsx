import React, { useContext } from "react";
import profileContext from "../../../../context_Reducer/profile/profileContext";
import profileContextServices from "../../../../services/Profile/profileContext";
import Footer from "./Footer";
import makingRequest from "../../../../services/request/makingRequest";
// modal footer to perform different request to the server based on the type of modal, so the edit one will update the profile details, the apply one will apply for the job, the pictures one will update the profile pictures and the appointment one will book an appointment
function ModalFooter() {
  // close the modal
  const { profileState, profileDispatch } = useContext(profileContext);
  // making a request to the server to update the profile details so the user can edit his profile
  const { profileDispatchServices, profileStateServices } = useContext(
    profileContextServices
  );
  // make a request to the server to the server based on the type of modal
  function update() {
    profileDispatch({ type: "CLOSE_MODAL" });
    // this need to be refactored,(arguements)
    makingRequest(
      "put",
      "http://localhost:4000/profile/details",
      profileDispatchServices,
      "UPDATE_PROFILE_EDIT_SERVER",
      profileStateServices.profileDetails.data
    );
  }

  function close() {
    profileDispatch({ type: "CLOSE_MODAL" });
  }

  switch (profileState.id) {
    case "edit":
      return (
        <Footer
          type={profileState.id}
          senRequest={() => update()}
          closeModal={close}
        />
      );
    case "apply":
      return (
        <Footer
          type={profileState.id}
          senRequest={() => update()}
          closeModal={close}
        />
      );
    case "pictures":
      return (
        <Footer
          type={profileState.id}
          senRequest={() => update()}
          closeModal={close}
        />
      );
    case "appointment":
      return (
        <Footer
          type={profileState.id}
          senRequest={() => update()}
          closeModal={close}
        />
      );
    default: {
      return <p>None</p>;
    }
  }
}

export default ModalFooter;
