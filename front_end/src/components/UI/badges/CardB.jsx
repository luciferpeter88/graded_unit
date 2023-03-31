import React from "react";
import air from "../../../assets/images/badges/air.png";

function Icon({ badgeIcon }) {
  return (
    <div className="  w-[7rem] h-[7rem]  bg-white rounded-md flex justify-center items-center">
      <img src={badgeIcon} alt="" />
    </div>
  );
}

function CardB() {
  return (
    <React.Fragment>
      <div className=" h-[15rem] bg-[#dce1df] rounded-md mt-10 flex gap-x-5 justify-evenly pl-2 items-center">
        <Icon badgeIcon={air} />
        <div className="   flex flex-col gap-y-5 w-[15rem]">
          <h2 className=" text-green-900  body-font font-semibold text-lg lg:text-2xl">
            Air Activities
          </h2>
          <p>
            here are three parts to this badge: Know the dangers involved in
            visiting an airfield.
          </p>
          <button className="  text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium ">
            Read More
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardB;
