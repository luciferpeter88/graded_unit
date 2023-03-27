import React from "react";
import homePic from "../../../assets/images/Home/scout.avif";
import { GoLocation } from "react-icons/go";
import { ImMobile } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";

function Home() {
  return (
    <React.Fragment>
      <section className="text-green-900  body-font font-medium">
        <div className="container mx-auto flex  py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-4 font-semibold">
              Lorem ipsum dolor sit,
              <br className="hidden lg:inline-block" />
              amet, consectetur,
              <br className="hidden lg:inline-block" />
              adipiscing elit,
            </h1>
            <p className="mb-8 leading-relaxed text-amber-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Start Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={homePic}
            />
          </div>
        </div>
      </section>
      <div className="  bg-green-900">
        <div className=" text-4xl text-white flex flex-wrap justify-center py-10 gap-8 sm:justify-between container mx-auto">
          <div className=" flex justify-center items-center flex-col  gap-4">
            <GoLocation />
            <h3 className=" text-3xl">Location</h3>
            <p className=" text-xl">123 Main St.Oban</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <ImMobile />
            <h3 className=" text-3xl">Number</h3>
            <p className=" text-xl">01896 358 269</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <HiOutlineMailOpen />
            <h3 className=" text-3xl">E-mail</h3>
            <p className=" text-xl">obanscouts@goscouts.com</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
