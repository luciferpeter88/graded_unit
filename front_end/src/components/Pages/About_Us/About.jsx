import React from "react";
import "../../../styles/about/about.css";
import logo from "../../../assets/images/logo/logo.jpeg";
import Footer from "../../UI/footer/Footer";
import pic from "../../../assets/images/about/about.png";
import pic2 from "../../../assets/images/about/about2.png";

function About() {
  return (
    <React.Fragment>
      <div className=" px-5 containerAbout">
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
        </div>
        <div className="aboutImg">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
            aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
            Lorem vulputate orci eget mi, sed pulvinar.
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
