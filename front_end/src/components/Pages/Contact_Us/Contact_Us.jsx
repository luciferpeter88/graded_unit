import React from "react";
import contactPic from "../../../assets/images/contact/contactUs.png";
import map from "../../../assets/images/contact/map.png";
import Footer from "../../../components/UI/footer/Footer";
import Card from "../../UI/contactUs/Card";
import Input from "../../UI/login&registration/Input";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Contact_Us() {
  return (
    <React.Fragment>
      <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center mt-8">
        Contact Us
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10 gap-y-8  lg:gap-y-24 px-3">
        <div className=" col-span-2 flex flex-wrap gap-y-5 xl:justify-between justify-center gap-5 2xl:justify-center">
          <Card
            icon={<AiOutlineMail />}
            name="Our Email"
            contact="obanscouts@goscouts.com"
          />
          <Card
            icon={<BsTelephoneInbound />}
            name="Our Number"
            contact="+xxx 01896 358 269"
          />
          <Card
            icon={<CiLocationOn />}
            name="Our Location"
            contact="123 Main St. Oban"
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex justify-center items-center">
          <img
            src={contactPic}
            alt=""
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <h1 className="text-green-900  body-font font-semibold text-xl lg:text-3xl">
            Send Your Message
          </h1>
          <div className=" flex w-[100%] gap-x-3 flex-col md:flex-row gap-y-3 mt-3">
            <Input id="nameC" label="Name" type="text" pHolder="Name" />
            <Input id="emailC" label="Email" type="email" pHolder="Email" />
          </div>
          <div className=" flex w-[100%] gap-x-3 flex-col md:flex-row gap-y-3 mt-3">
            <Input
              id="mobileC"
              label="Mobile No"
              type="number"
              pHolder="Mobile No"
            />
            <Input id="subject" label="Subject" type="text" pHolder="Subject" />
          </div>
          <div className=" flex flex-col gap-y-3 mt-3 h-[15rem]">
            <label htmlFor="textArea" className=" text-green-900 text-lg">
              Message
            </label>
            <textarea
              id="textArea"
              placeholder="Send message"
              className="bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%] h-full"
            />
          </div>
          <button className=" bg-green-900 text-white px-5 py-2 rounded-md mt-5">
            Send Message
          </button>
        </div>
        <div
          className=" col-span-2  bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${map})` }}
        ></div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Contact_Us;
