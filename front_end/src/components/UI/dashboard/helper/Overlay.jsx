import React from "react";

function Overlay() {
  return (
    <div className=" absolute top-0 left-0 bg-black h-[150vh] opacity-70 w-full z-10 flex justify-center items-center">
      <div className=" text-yellow-300 mb-[50%] text-2xl uppercase">
        Waiting for approval!
      </div>
    </div>
  );
}

export default Overlay;
