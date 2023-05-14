import React, { useContext } from "react";
import profileContext from "../../../../services/Profile/profileContext";

function UploadPictures() {
  const { profileDispatchServices, profileStateServices } =
    useContext(profileContext);
  // console.log(profileStateServices.profilePictures);
  // function to handle the change of the input field
  const handleImageChange = async (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      // display the uploaded images
      profileDispatchServices({
        type: "UPDATE_PROFILE_PICTURES",
        payload: filesArray,
      });

      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      // empty array for the base64 images
      const base64Images = [];
      // convert the images to base64
      const promises = Array.from(e.target.files).map((file) => {
        // promise to convert the images to base64, so we can send them to the server
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            // push the base64 images to the array
            base64Images.push(reader.result);
            resolve();
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });
      // send the images to the reducer
      try {
        await Promise.all(promises);
        profileDispatchServices({
          type: "FORM_DATA",
          payload: base64Images,
        });
      } catch (error) {
        console.error("Error converting images:", error);
      }
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return <img src={photo} key={photo} alt="" />;
    });
  };

  return (
    <React.Fragment>
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <i className="material-icons">You can add multiple photos</i>
          </label>
        </div>
        <div className="result">
          {renderPhotos(profileStateServices.profilePictures.data)}
        </div>
      </div>
    </React.Fragment>
  );
}

export default UploadPictures;
