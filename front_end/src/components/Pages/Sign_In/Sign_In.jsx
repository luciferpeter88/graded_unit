import React from "react";
import signIn from "../../../assets/images/login&registration/test.jpg";
import { Link } from "react-router-dom";
import Input from "../../UI/login&registration/Input";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    //send data to backend
  };

  return (
    <React.Fragment>
      <section className=" flex lg:h-[calc(100vh-5.5rem)] md:mt-6 flex-col-reverse gap-y-16 pb-10 lg:gap-y-0 lg:flex-row">
        <div className=" lg:w-1/2 flex flex-col justify-center gap-y-7">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center">
            Login
          </h1>
          <Input
            id="email"
            label="Email"
            type="email"
            pHolder="example2@gmail.com"
            padding="px-5"
            register={register}
            validation={{
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            }}
            error={errors.email}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            pHolder="**********"
            padding="px-5"
            register={register}
            validation={{ required: "Password is required" }}
            error={errors.password}
          />
          <div className="flex flex-col gap-y-2 mx-auto w-[100%] px-5 md:px-0 md:w-[65%]">
            <button
              className=" text-white bg-green-900 py-1 px-4 h-10 w-full rounded font-medium"
              onClick={handleSubmit(onSubmit)}
            >
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
          className=" h-[50vh] lg:h-[calc(100vh-5.5rem)] lg:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${signIn})`, backgroundSize: "95%" }}
        ></div>
      </section>
    </React.Fragment>
  );
}

export default SignIn;
