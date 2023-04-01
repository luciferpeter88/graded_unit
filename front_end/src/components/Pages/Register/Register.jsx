import React from "react";
import register from "../../../assets/images/login&registration/test.jpg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <React.Fragment>
      <section className=" flex lg:h-[calc(100vh-5.5rem)] md:mt-6 flex-col-reverse gap-y-16 pb-10 xl:pb-0 lg:gap-y-0 lg:flex-row">
        <div className=" lg:w-1/2 flex flex-col justify-center gap-y-5">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center">
            Create Account
          </h1>
          <div className=" flex w-[100%] px-5 md:px-0 md:w-[65%] mx-auto gap-x-3 flex-col md:flex-row gap-y-3">
            <div className="flex flex-col gap-y-2 mx-auto w-[100%] ">
              <label htmlFor="fName" className=" text-green-900 text-lg">
                First Name
              </label>
              <input
                type="text"
                id="fName"
                placeholder="John"
                className=" h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-y-2 mx-auto w-[100%]">
              <label htmlFor="lName" className=" text-green-900 text-lg">
                Last Name
              </label>
              <input
                type="text"
                id="lName"
                placeholder="Smith"
                className=" h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mx-auto w-[100%] px-5 md:px-0 md:w-[65%]">
            <label htmlFor="email" className=" text-green-900 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example2@gmail.com"
              className=" h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600"
            />
          </div>
          <div className=" flex w-[100%] px-5 md:px-0 md:w-[65%] mx-auto gap-x-3 flex-col md:flex-row gap-y-3">
            <div className="flex flex-col gap-y-2 mx-auto w-[100%] ">
              <label htmlFor="password" className=" text-green-900 text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="**********"
                className=" h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-y-2 mx-auto w-[100%]">
              <label htmlFor="cPassword" className=" text-green-900 text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                id="cPassword"
                placeholder="**********"
                className=" h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mx-auto w-[100%] px-5 md:px-0 md:w-[65%]">
            <button className=" text-white bg-green-900 py-1 px-4 h-10 w-full rounded font-medium">
              Sign Up
            </button>
          </div>
          <p className=" w-[65%] mx-auto text-center">
            Already a member ?{" "}
            <span className=" text-green-900 font-semibold">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
        <div
          className=" h-[50vh] lg:h-[calc(100vh-5.5rem)] lg:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${register})`, backgroundSize: "95%" }}
        ></div>
      </section>
    </React.Fragment>
  );
}

export default Register;
