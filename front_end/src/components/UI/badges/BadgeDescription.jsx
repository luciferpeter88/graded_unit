import React from "react";

function BadgeDescription({ title, desc }) {
  return (
    <div className=" flex flex-col text-xl gap-y-1">
      <h1 className=" font-semibold text-green-900">{title}</h1>
      <h1 className="text-gray-400  body-font font-mediumd text-base">
        {desc}
      </h1>
    </div>
  );
}

export default BadgeDescription;
