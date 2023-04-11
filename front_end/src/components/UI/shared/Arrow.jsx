import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Arrow({ onclickNext, onclickPrev, pageNumbers }) {
  return (
    <div className=" flex justify-center items-center gap-x-3 mt-10">
      <button
        className=" h-8 w-8 bg-green-900 flex justify-center items-center rounded-lg cursor-pointer text-white"
        onClick={onclickPrev}
      >
        <AiOutlineLeft />
      </button>
      <h4 className=" font-medium text-lg  text-gray-700">{pageNumbers}</h4>
      <button
        className=" h-8 w-8 bg-green-900 flex justify-center items-center rounded-lg cursor-pointer text-white"
        onClick={onclickNext}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
}

export default Arrow;
