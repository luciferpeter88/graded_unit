import React, { useContext } from "react";
import profileContext from "../../../../services/Profile/profileContext";

function PendingPictures() {
  // get the pictures and hasData from the state and destructure them
  const {
    profileStateServices: { profilePictures },
  } = useContext(profileContext);
  const {
    dataFromServer: { allPictures },
    hasData,
  } = profilePictures;
  // get the user id from the dataFromServer and use it to filter out the pictures that belong to the user
  const id = profilePictures.dataFromServer._id;
  // display the pictures that is pending and belong to the user
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
      {hasData
        ? allPictures
            .filter(
              (picture) => picture.status === "pending" && id === picture.userId
            )
            .map((picture) => (
              <div
                key={picture._id}
                className="border relative h-56 flex justify-center items-center"
              >
                <img
                  className="w-full h-full object-cover"
                  src={picture.imagePath}
                  alt=""
                />
                <h2 className=" text-white font-medium absolute left-2 bottom-2">
                  {picture.uploadedBy}
                </h2>
              </div>
            ))
        : null}
    </div>
  );
}

export default PendingPictures;
