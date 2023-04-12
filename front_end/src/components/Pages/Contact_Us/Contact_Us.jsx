import React from "react";
import contactPic from "../../../assets/images/contact/contactUs.png";
import Footer from "../../../components/UI/footer/Footer";
import Card from "../../UI/contactUs/Card";
import Input from "../../UI/login&registration/Input";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useForm } from "react-hook-form";

function Contact_Us() {
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
            <Input
              id="nameC"
              label="Name"
              type="text"
              pHolder="Name"
              register={register}
              validation={{ required: "Name is required" }}
              error={errors.nameC}
            />
            <Input
              id="emailC"
              label="Email"
              type="email"
              pHolder="Email"
              register={register}
              validation={{
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              }}
              error={errors.emailC}
            />
          </div>
          <div className=" flex w-[100%] gap-x-3 flex-col md:flex-row gap-y-3 mt-3">
            <Input
              id="mobileC"
              label="Mobile No"
              type="number"
              pHolder="Mobile No"
              register={register}
              validation={{
                required: "Mobile number is required",
                pattern: {
                  value: /^((\+44\s?|0)7\d{9})$/,
                  message: "Invalid UK mobile number format",
                },
              }}
              error={errors.mobileC}
            />
            <Input
              id="subject"
              label="Subject"
              type="text"
              pHolder="Subject"
              register={register}
              validation={{ required: "Subject is required" }}
              error={errors.subject}
            />
          </div>
          <div className=" flex flex-col gap-y-3 mt-3 h-[15rem]">
            <label htmlFor="textArea" className=" text-green-900 text-lg">
              Message
            </label>
            <textarea
              id="textArea"
              placeholder="Send message"
              className={`bg-[#F4F2F2] p-3 rounded-md outline-green-600 w-[100%] h-full ${
                errors.textArea ? "outline-red-500" : ""
              }`}
              {...register("textArea", { required: "Message is required" })}
            />
            {errors.textArea && (
              <p className="text-red-500 text-sm">*{errors.textArea.message}</p>
            )}
          </div>
          <button
            className=" bg-green-900 text-white px-5 py-2 rounded-md mt-5"
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
          </button>
        </div>
        <div className=" col-span-2 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.9765555995136!2d-4.231797283785894!3d55.84572147610628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846b41b7bb221%3A0xf813b9e0febec015!2sThe%20Old%20Rugged%20Cross%20Spiritual%20Mission%2C%20123%20Main%20St%2C%20Bridgeton%2C%20Glasgow%20G40%201QD!5e0!3m2!1sen!2suk!4v1680942610035!5m2!1sen!2suk"
            title="Online Game"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Contact_Us;
