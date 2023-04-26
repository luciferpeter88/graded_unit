import React from "react";
import { IonIcon } from "@ionic/react";

function Box({ icon, id, handleclick }) {
  return (
    <div className=" row-span-1  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg text-green-900 hover:text-white hover:bg-green-900 transition-all ">
      <IonIcon
        id={id}
        icon={icon}
        className=" h-24 w-32 cursor-pointer"
        onClick={handleclick}
      />
    </div>
  );
}

export default Box;
