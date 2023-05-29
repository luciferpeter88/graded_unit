import React, { useEffect, useState } from "react";
import Footer from "../../UI/footer/Footer";
import Dark from "../../UI/gallery/Dark";
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
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 mt-5 gap-4">
          {set
            ? filtered.map((filter) => {
                return (
                  <div
                    key={filter._id}
                    className=" h-96 relative  bg-cover bg-center cursor-pointer transform transition-transform duration-300 "
                  >
                    <img
                      src={filter.imagePath}
                      alt=""
                      className=" h-full w-full"
                    ></img>
                    <Dark />
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Gallery;
