import React from "react";
import register from "../../../assets/images/login&registration/test.jpg";
import { Link } from "react-router-dom";
import Input from "../../UI/login&registration/Input";

function Register() {
  return (
    <React.Fragment>
      <section className=" flex lg:h-[calc(100vh-5.5rem)] md:mt-6 flex-col-reverse gap-y-16 pb-10 xl:pb-0 lg:gap-y-0 lg:flex-row">
        <div className=" lg:w-1/2 flex flex-col justify-center gap-y-5">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center">
            Create Account
          </h1>
          <div className=" flex w-[100%]  md:w-[65%] mx-auto gap-x-3 flex-col md:flex-row gap-y-3">
            <Input
              id="fName"
              label="First Name"
              type="text"
              pHolder="John"
              padding="px-5"
            />
            <Input
              id="lName"
              label="Last Name"
              type="text"
              pHolder="Smith"
              padding="px-5"
            />
          </div>
          <Input
            id="email"
            label="Email"
            type="email"
            pHolder="example2@gmail.com"
            padding="px-5"
          />
          <div className=" flex w-[100%] md:w-[65%] mx-auto gap-x-3 flex-col md:flex-row gap-y-3">
            <Input
              id="password"
              label="Password"
              type="password"
              pHolder="**********"
              padding="px-5"
            />
            <Input
              id="cPassword"
              label="Confirm Password"
              type="password"
              pHolder="**********"
              padding="px-5"
            />
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
