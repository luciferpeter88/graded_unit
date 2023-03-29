import React from "react";

function DetailsCard({ icon, description, color }) {
  return (
    <div className="h-60 w-60  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center py-3 drop-shadow-lg gap-5">
      <div
        className={`${color} rounded-full h-24 w-24 flex justify-center items-center text-white text-5xl`}
      >
        {icon}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default DetailsCard;
