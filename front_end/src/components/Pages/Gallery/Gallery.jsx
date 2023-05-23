import React, { useEffect, useState } from "react";
import test from "../../../assets/images/about/about2.png";
import Footer from "../../UI/footer/Footer";
import Search from "../../UI/shared/Search";
import Dark from "../../UI/gallery/Dark";
import Arrow from "../../UI/shared/Arrow";
import axios from "axios";
function Gallery() {
  const [data, setData] = useState({
    pictures: [],
    hasData: false,
  });
  const [filtered, setFiltered] = useState("");
  const [set, isSet] = useState(false);
  useEffect(() => {
    async function getPictures() {
      try {
        const response = await axios.get(
          "http://localhost:4000/public/gallery"
        );
        setData({
          pictures: response.data,
          hasData: true,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getPictures();
  }, []);
  useEffect(() => {
    if (data.hasData) {
      const filterPictures = data.pictures.filter((pic) => {
        return pic.status === "active";
      });
      setFiltered(filterPictures);
      isSet(true);
    }
  }, [data.hasData]);

  console.log(filtered, "filtered");
  return (
    <React.Fragment>
      <div className=" px-5">
        <div className=" mt-8 flex flex-col gap-y-5 items-center">
          <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center">
            Gallery
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-2 mt-16 min-h-[180vh] md:min-h-screen">
          {set
            ? filtered.map((filter) => {
                return (
                  <div
                    className="  md:col-span-3  xl:col-span-2 xl:row-span-2 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300 "
                    key={filter._id}
                    style={{ backgroundImage: `url(${filter.imagePath})` }}
                  >
                    <Dark />
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Arrow />
      <Footer />
    </React.Fragment>
  );
}
export default Gallery;
