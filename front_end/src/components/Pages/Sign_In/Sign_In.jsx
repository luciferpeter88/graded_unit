import React from "react";
import signIn from "../../../assets/images/login&registration/contact.jpg";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <React.Fragment>
      <section className=" flex lg:h-[calc(100vh-5.5rem)] mt-6 flex-col-reverse gap-y-16 pb-10 lg:gap-y-0 lg:flex-row">
        <div className=" lg:w-1/2 flex flex-col justify-center gap-y-7">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center">
            Login
          </h1>
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
          <div className="flex flex-col gap-y-2 mx-auto w-[100%] px-5 md:px-0 md:w-[65%]">
            <label htmlFor="password" className=" text-green-900 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              className=" h-12  bg-[#F4F2F2] p-3 rounded-md outline-green-600"
            />
          </div>
          <div className="flex flex-col gap-y-2 mx-auto w-[100%] px-5 md:px-0 md:w-[65%]">
            <button className=" text-white bg-green-900 py-1 px-4 h-10 w-full rounded font-medium">
              Login
            </button>
          </div>
          <p className=" w-[65%] mx-auto text-center">
            Don’t have an account ?{" "}
            <span className=" text-green-900 font-semibold">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
        <div
          className=" h-[50vh] lg:h-[calc(100vh-5.5rem)] lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${signIn})` }}
        ></div>
      </section>
    </React.Fragment>
  );
}

export default SignIn;
