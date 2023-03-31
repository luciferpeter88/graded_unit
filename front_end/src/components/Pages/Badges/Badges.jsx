import React from "react";
import CardB from "../../UI/badges/CardB";
import Footer from "../../UI/footer/Footer";
function Badges() {
  return (
    <React.Fragment>
      <h1 className="text-green-900  body-font font-bold text-2xl lg:text-4xl text-center mt-8">
        Badges
      </h1>
      <div className=" grid px-2 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 2xl:grid-cols-4">
        {/* This is going to be dynamic */}
        <CardB />
        <CardB />
        <CardB />
        <CardB />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Badges;
