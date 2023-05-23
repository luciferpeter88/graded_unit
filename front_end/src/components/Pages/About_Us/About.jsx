import React from "react";
import "../../../styles/about/about.css";
import logo from "../../../assets/images/logo/logo.png";
import Footer from "../../UI/footer/Footer";
import pic from "../../../assets/images/about/about.jpg";
import pic2 from "../../../assets/images/about/about2.png";

function About() {
  return (
    <React.Fragment>
      <div className=" px-5 containerAbout 2xl:container 2xl:mx-auto">
        <h1 className="areaHeader text-center text-green-900  body-font font-bold text-2xl lg:text-4xl ">
          About Us
        </h1>
        <div className="logo flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="aboutD flex flex-col gap-y-3 justify-center items-center text-lg lg:text-xl">
          <p>
            Welcome to the Obanshire Cub Scouts website! We are a dedicated
            group of Cub Scouts, leaders, and parents/carers, focused on
            providing a fun and educational experience for children in our local
            community.
          </p>
          <p>
            Our website serves as a central hub for all the information you need
            to know about Cub Scouts in Obanshire.
          </p>
        </div>
        <div className="aboutImg ">
          <img
            src={pic}
            alt=""
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="ourH flex flex-col gap-y-4 justify-center">
          <h2 className=" text-red-900  body-font font-bold text-lg lg:text-2xl">
            {" "}
            Our history
          </h2>
          <p className="text-lg lg:text-xl">
            Obanshire Cub Scouts has a rich history that spans several decades.
            Our organization was founded in the year XXXX with the vision of
            providing a nurturing and adventurous environment for young children
            in the Obanshire community. Since our inception, we have been
            dedicated to instilling important values such as teamwork,
            leadership, and community service in our Cub Scouts.
          </p>
        </div>
        <div className="ourHp flex justify-center lg:justify-end">
          <img src={pic2} alt="" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
