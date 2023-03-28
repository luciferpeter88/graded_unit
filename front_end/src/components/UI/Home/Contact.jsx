import React from "react";

function Contact({ icon, name, details, divider }) {
  return (
    <div className=" flex justify-center items-center flex-col  gap-2 w-1/2 lg:w-1/3 relative">
      {icon}
      <h3 className=" lg:text-2xl text-xl ">{name}</h3>
      <p className=" text-base lg:text-lg">{details}</p>
      {divider}
    </div>
  );
}

export default Contact;
