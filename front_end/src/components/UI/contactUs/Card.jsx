import React from "react";

function Card({ name, contact, icon }) {
  return (
    <div className=" px-5 h-40 lg:h-52 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  drop-shadow-lg flex flex-col justify-around transition-all ease-linear duration-150 hover:translate-y-[-0.75rem] hover:border-2 hover:border-green-400">
      <div className=" flex items-center gap-x-5">
        <div className="rounded-full h-24 w-24 flex justify-center bg-[#2a4b37] items-center text-white text-5xl">
          {icon}
        </div>
        <h2 className=" text-green-900  body-font text-xl lg:text-3xl">
          {name}
        </h2>
      </div>
      <p className="text-lg lg:text-xl text-gray-400 font-medium ">{contact}</p>
    </div>
  );
}

export default Card;
