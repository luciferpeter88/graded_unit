import React from "react";

function Icon({ badgeIcon }) {
  return (
    <div className="  w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]  bg-white rounded-md flex justify-center items-center">
      <img src={badgeIcon} alt="" />
    </div>
  );
}

export default Icon;
