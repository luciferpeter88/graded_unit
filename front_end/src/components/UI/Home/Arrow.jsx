import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Arrow() {
  return (
    <div className=" flex justify-center items-center gap-x-3 mt-10">
      <div className=" h-8 w-8 bg-green-900 flex justify-center items-center rounded-lg cursor-pointer text-white">
        <AiOutlineLeft />
      </div>
      <h4 className=" font-bold text-lg  text-gray-700">1</h4>
      <div className=" h-8 w-8 bg-green-900 flex justify-center items-center rounded-lg cursor-pointer text-white">
        <AiOutlineRight />
      </div>
    </div>
  );
}

export default Arrow;
