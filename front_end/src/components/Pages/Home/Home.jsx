import React from "react";
import "../../../styles/home/home.css";
import homePic from "../../../assets/images/Home/scout.avif";
import { GoLocation } from "react-icons/go";
import { ImMobile } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Contact from "../../UI/Home/Contact";
import Divider from "../../UI/Home/Divider";
import Card from "../../UI/Home/Card";
import Arrow from "../../UI/Home/Arrow";
import homeCamp from "../../../assets/images/Home/homeCamp.png";
import DetailsCard from "../../UI/Home/DetailsCard";

function Home() {
  return (
    <React.Fragment>
      <div className="containerHome">
        <div className="area1 flex justify-center   flex-col gap-3 ">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center lg:text-left">
            Lorem ipsum dolor sit amet,
            <br /> amet, consectetur,
            <br />
            adipiscing elit,
          </h1>
          <p className=" text-lg lg:text-xl text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <button className="mx-auto lg:mx-0  text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium mt-3 ">
            Start Now
          </button>
        </div>
        <div className="area2 flex justify-center items-center w-full h-full overflow-hidden">
          <img
            src={homePic}
            alt="home"
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="area3 flex justify-center items-center">
          <div className=" bg-green-900 rounded-md  text-2xl lg:text-4xl text-white flex flex-wrap  justify-around items-center h-5/6 font-semibold w-full py-3 lg:py-0">
            <Contact
              icon={<GoLocation />}
              name="Location"
              details="123 Main St.Oban"
              divider={<Divider />}
            />
            <Contact
              icon={<ImMobile />}
              name="Number"
              details="01896 358 269"
              divider={<Divider />}
            />
            <Contact
              icon={<HiOutlineMailOpen />}
              name="E-mail"
              details="obanscouts@goscouts.com"
            />
          </div>
        </div>
      </div>
      <div className=" px-5">
        <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center mt-16 lg:mt-14">
          Upcoming Events
        </h1>
        <p className="text-lg lg:text-xl text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      {/* The data is going to be coming from the database */}
      <div className=" py-5 mt-5 px-5 flex xl:justify-between justify-center  gap-5 flex-wrap ">
        <Card />
        <Card />
        <Card />
      </div>
      <Arrow />
      <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center mt-16 lg:mt-10">
        Details of the events
      </h1>
      <p className="text-lg lg:text-xl text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="px-5 flex  xl:justify-between items-center flex-wrap">
        <div className="w-full lg:w-1/2  flex justify-center lg:block">
          <img
            src={homeCamp}
            alt="camp"
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className=" w-full lg:w-1/2 flex flex-col gap-y-5 text-center lg:text-left">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl">
            Tile Of the Event
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
            aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
            Lorem vulputate orci eget mi, sed pulvinar.
          </p>
          <p>
            Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
            faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
            posuere in. Pellentesque volutpat vestibulum.
          </p>
          <button className="mx-auto lg:mx-0  text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium mt-3 ">
            Read more
          </button>
        </div>
      </div>
      <div className=" flex gap-8 justify-center flex-wrap mt-10 xl:mt-0 ">
        <DetailsCard
          icon={<AiOutlineCalendar />}
          description="09/03/2023"
          color="bg-green-900"
        />
        <DetailsCard
          icon={<AiOutlineClockCircle />}
          description="From 10 Am to 5 Pm"
          color="bg-red-900"
        />
        <DetailsCard
          icon={<CiLocationOn />}
          description="23 Main St.Oban"
          color="bg-green-900"
        />
      </div>
    </React.Fragment>
  );
}

export default Home;
