import React from "react";
import test from "../../../assets/images/about/about2.png";
import Footer from "../../UI/footer/Footer";
import Search from "../../UI/shared/Search";
import Dark from "../../UI/gallery/Dark";
import Arrow from "../../UI/shared/Arrow";
function Gallery() {
  return (
    <React.Fragment>
      <div className=" px-5">
        <div className=" mt-8 flex flex-col gap-y-5 items-center">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center">
            Gallery
          </h1>
          <Search placeholder="a picture" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-2 mt-16 min-h-[180vh] md:min-h-screen">
          <div
            className="  md:col-span-3  xl:col-span-2 xl:row-span-2 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300 "
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
          <div
            className=" md:col-span-3 md:row-span-2 xl:col-span-3 xl:row-span-3 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300"
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
          <div
            className=" md:col-span-3 xl:col-span-1 xl:row-span-3 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300"
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
          <div
            className=" md:col-span-2 md:row-span-2  xl:col-span-2 xl:row-span-2 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300"
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
          <div
            className=" md:col-span-4 md:row-span-2  xl:col-span-1 xl:row-span-3 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300"
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
          <div
            className=" md:col-span-3 md:row-span-2 xl:col-span-3 xl:row-span-3 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300"
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
          <div
            className=" md:col-span-3 md:row-span-2 xl:col-span-2 xl:row-span-2 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300"
            style={{ backgroundImage: `url(${test})` }}
          >
            <Dark />
          </div>
        </div>
      </div>
      <Arrow />
      <Footer />
    </React.Fragment>
  );
}
export default Gallery;
